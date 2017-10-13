import auth from './auth.js';
import { findOption, hasPermissions } from 'helpers/menuHelper';
import { ROUTES_MAIN, ROUTES_LANDING } from './constants';

export default {

  redirectToDashboard(nextState, replace, callback) {
    if (auth.loggedIn()) {
      auth.loadCurrentUser()
      .then(() => {
        replace(ROUTES_MAIN.MAIN.path);
        callback();
      });
    } else {
      callback();
    }
  },

  redirectToLogin(nextState, replace, callback) {
    if (auth.loggedIn()) {
      auth.loadCurrentUser()
      .then(() => {
        if (hasPermissions(findOption(nextState.location.pathname))) {
          callback();
        } else {
          replace(ROUTES_LANDING.MAIN.path);
          callback();
        }
      });
    } else {
      replace(ROUTES_LANDING.LOGIN.path);
      callback();
    }
  },

};
