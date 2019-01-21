import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';

import ProfileForm from './components/ProfileForm';
import ProfileList from './components/ProfileList';
import ActiveProfile from './components/ActiveProfile';

const App = () => (
  <Provider store={store}>
    ProfileForm
    <div><ProfileForm /></div>
    ProfileList
    <div><ProfileList /></div>
    ActiveProfile
    <div><ActiveProfile /></div>
  </Provider>
);

export default hot(module)(App);
