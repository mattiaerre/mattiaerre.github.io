import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

const ID_TOKEN = 'id_token';
const ACCESS_TOKEN = 'access_token';

// I do not like this design !?!

export default class AuthService {
  constructor(clientId, domain) {
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: `${window.location.origin}/`,
        responseType: 'token'
      }
    });
    this.lock.on('authenticated', this.doAuthentication.bind(this));
    this.lock.on('authorization_error', this.authorizationError.bind(this));
    this.login = this.login.bind(this);
  }

  doAuthentication(authResult) {
    this.setToken(authResult.idToken, authResult.accessToken);
    browserHistory.replace('/');
  }

  authorizationError(error) { // eslint-disable-line
    console.log('authorization_error', error); // eslint-disable-line
  }

  login() { this.lock.show(); }

  loggedIn() { return !!this.getToken().idToken; }

  setToken(idToken, accessToken) { // eslint-disable-line
    localStorage.setItem(ID_TOKEN, idToken);
    localStorage.setItem(ACCESS_TOKEN, accessToken);
  }

  getToken() { // eslint-disable-line
    const data = {
      idToken: localStorage.getItem(ID_TOKEN),
      accessToken: localStorage.getItem(ACCESS_TOKEN)
    };
    return data;
  }

  logout() { // eslint-disable-line
    localStorage.removeItem(ID_TOKEN);
    localStorage.removeItem(ACCESS_TOKEN);
  }

  getUserInfo(callback) {
    this.lock.getUserInfo(this.getToken().accessToken, (error, profile) => {
      callback(error, profile);
    });
  }
}
