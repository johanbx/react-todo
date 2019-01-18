import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './style.css';

const approot = document.getElementById('react-app');

ReactDOM.render(
  <AppContainer><App /></AppContainer>,
  approot,
);
