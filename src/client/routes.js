import React from 'react';  // eslint-disable-line
import { Route, IndexRoute } from 'react-router';  // eslint-disable-line
import AuthService from './utils/AuthService';  // eslint-disable-line
import Container from './components/Container';  // eslint-disable-line
import Home from './components/Home/Home';  // eslint-disable-line
import Login from './components/Login/Login';  // eslint-disable-line

const auth = new AuthService('YxmJEseG6u9Bl8ONjGkTicUPrryqDVY1', 'mattiaerre.auth0.com');

// see: https://auth0.com/forum/t/having-trouble-with-login-following-the-react-guide/3084/7
const requireAuth = (nextState, replace) => {
  console.log('logged in', auth.loggedIn());
  if (nextState.location.hash) {
    const hashString = nextState.location.hash;
    const idString = '&id_token';
    const firstIndex = hashString.indexOf(idString) + idString.length + 1;
    const lastIndex = hashString.indexOf('&token_type=');
    console.log(hashString.substring(firstIndex, lastIndex));
    localStorage.setItem('id_token', hashString.substring(firstIndex, lastIndex));
  }
  if (!auth.loggedIn()) {
    console.log(nextState, 'nextState', replace, 'replace');
    replace({ pathname: '/login' });
    return false;
  }
  return true;
};

export default (
  <Route path="/" component={Container} auth={auth}>
    <IndexRoute component={Home} onEnter={requireAuth} />
    <Route path="/login" auth={auth} component={Login} />
  </Route>
);
