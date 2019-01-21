import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './style.css';

const approot = document.getElementById('react-app');

ReactDOM.render(
  <BrowserRouter>
    <AppContainer><App /></AppContainer>
  </BrowserRouter>,
  approot,
);
