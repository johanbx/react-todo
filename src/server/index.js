import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import mongoose from 'mongoose';
import expressSwagger from 'express-swagger-generator';

import webpackConfig from './webpack.config';
import redisClient from './redis-client';
import apiV1 from './api-v1';

// DATABASE
mongoose.connect(process.env.MONGODB_URL, {
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
});

// EXPRESS
const app = express();
app.use(express.json());
app.use(express.urlencoded());

// WEBPACK
const webpackCompiler = webpack(webpackConfig);
app.use(webpackMiddleware(webpackCompiler, { stats: 'errors-only' }));
app.use(webpackHotMiddleware(webpackCompiler));

// API
expressSwagger(app)({
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0',
    },
    host: 'localhost:3000',
    basePath: '/api/v1',
    produces: [
      'application/json',
      'application/xml',
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
    },
  },
  basedir: __dirname, // app absolute path
  files: ['./api-v1/**/*.js'], // Path to the API handle folder
});

app.use('/api/v1', apiV1);

// ROUTES
app.get('/store/:key', async (req, res) => {
  const { key } = req.params;
  const value = req.query;
  await redisClient.setAsync(key, JSON.stringify(value));
  return res.send('Success');
});

app.get('/:key', async (req, res) => {
  const { key } = req.params;
  const rawData = await redisClient.getAsync(key);
  return res.json(JSON.parse(rawData));
});

app.listen(process.env.PORT, () => console.log(
  `Example app running in ${process.env.NODE_ENV} listening on port ${process.env.PORT}!`,
));
