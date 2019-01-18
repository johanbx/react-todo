import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);

export default redis.createClient(process.env.REDIS_URL);
