import React from 'react';  // eslint-disable-line
import { Route, IndexRedirect } from 'react-router';  // eslint-disable-line
import AuthService from './utils/AuthService';  // eslint-disable-line
import Container from './components/Container';  // eslint-disable-line
import Home from './components/Home/Home';  // eslint-disable-line
import Login from './components/Login/Login';  // eslint-disable-line

const auth = new AuthService('YxmJEseG6u9Bl8ONjGkTicUPrryqDVY1', 'mattiaerre.auth0.com');

const requireAuth = (nextState, replace) => { // eslint-disable-line
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

export default (
  <Route path="/" component={Container} auth={auth}>
    <IndexRedirect to="/home" />
    <Route path="/home" component={Home} />
    <Route path="/login" component={Login} />
  </Route>
);
