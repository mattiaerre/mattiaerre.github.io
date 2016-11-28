import Auth0Lock from 'auth0-lock';
import * as eventNames from '../constants/event-names';

const AUTH_RESULT = 'AUTH_RESULT';

const lockFactory = (clientId, domain, eventEmitter) => {
  const lock = new Auth0Lock(clientId, domain, {
    auth: {
      redirectUrl: `${window.location.origin}/`,
      responseType: 'token'
    }
  });

  lock.on('authenticated', (authResult) => {
    localStorage.setItem(AUTH_RESULT,
      JSON.stringify({ accessToken: authResult.accessToken, idToken: authResult.idToken }));
    eventEmitter.emit(eventNames.AUTH_RESULT_PERSISTED);
  });

  const getAuthResult = () => (JSON.parse(localStorage.getItem(AUTH_RESULT)));

  eventEmitter.on(eventNames.USER_IS_LOGGED_IN_REQUESTED, () => {
    eventEmitter.emit(eventNames.IS_LOGGED_IN_SENT, !!getAuthResult());
  });

  eventEmitter.on(eventNames.USER_INFO_REQUESTED, () => {
    const authResult = getAuthResult();
    if (authResult) {
      lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (!error) {
          eventEmitter.emit(eventNames.PROFILE_SENT, { nickname: profile.nickname, userIsLoggedIn: true });
        }
      });
    } else {
      eventEmitter.emit(eventNames.PROFILE_SENT, { nickname: 'Tommy Atkins', userIsLoggedIn: false });
    }
  });

  const show = () => {
    lock.show();
  };

  const logout = () => {
    localStorage.removeItem(AUTH_RESULT);
    eventEmitter.emit(eventNames.AUTH_RESULT_DELETED);
  };

  return {
    show,
    logout
  };
};

export default lockFactory;
