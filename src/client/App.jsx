import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';

import ProfileForm from './components/ProfileForm';
import ProfileList from './components/ProfileList';

const App = () => (
  <Provider store={store}>
    <div><ProfileForm /></div>
    <div><ProfileList /></div>
  </Provider>
);

export default hot(module)(App);
