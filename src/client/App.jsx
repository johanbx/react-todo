import React from 'react';
import { hot } from 'react-hot-loader';

import Profile from './Profile';
import ProfileForm from './ProfileForm';

const App = () => (
  <div>
    <div><Profile /></div>
    <div><ProfileForm /></div>
  </div>
);

export default hot(module)(App);
