import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import store from './store';

import ProfileForm from './components/ProfileForm';
import ProfileList from './components/ProfileList';
import ActiveProfile from './components/ActiveProfile';

const Page1 = () => (
  <div>
    ProfileForm <ProfileForm />
  </div>
);

const Page2 = () => (
  <div>
    ProfileList <ProfileList />
  </div>
);

const Page3 = () => (
  <div>
    ActiveProfile <ActiveProfile />
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Page1} />
    <Route exact path="/list" component={Page2} />
    <Route exact path="/active" component={Page3} />
  </Switch>
);

const App = () => (
  <Provider store={store}>
    <ul>
      <li><Link to="/">/</Link></li>
      <li><Link to="/list">/list</Link></li>
      <li><Link to="/active">/active</Link></li>
    </ul>
    <Main />
    <div>some footer</div>
  </Provider>
);

export default hot(module)(App);
