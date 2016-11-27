// src/utils/AuthService.js

import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: `${window.location.origin}/`,
        responseType: 'token'
      }
    });
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this.doAuthentication.bind(this));
    // binds login functions to keep this context
    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this.authorizationError.bind(this));
    this.login = this.login.bind(this);
  }

  doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home route
    browserHistory.replace('/');
  }

  authorizationError(error) { // eslint-disable-line
    // Unexpected authentication error
    console.log('authorization_error', error);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken) { // eslint-disable-line
    // Saves user token to local storage
    localStorage.setItem('id_token', idToken);
  }

  getToken() { // eslint-disable-line
    // Retrieves the user token from local storage
    return localStorage.getItem('id_token');
  }

  logout() { // eslint-disable-line
    // Clear user token and profile data from local storage
    localStorage.removeItem('id_token');
  }
}
