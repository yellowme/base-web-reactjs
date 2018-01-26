import auth from './auth.js';
import { findOption, hasPermissions } from 'helpers/menuHelper';
import { ROUTES_MAIN, ROUTES_LANDING } from './constants';

module.exports = {

  redirectToDashboard(nextState, replace, callback) {
    auth.loadCurrentUser()
    .then(() => {
      if (auth.loggedIn()) {
        replace(ROUTES_MAIN.MAIN.path);
        callback();
      } else {
        callback();
      }
    });
  },

  redirectToLogin(nextState, replace, callback) {
    auth.loadCurrentUser()
    .then(() => {
      if (auth.loggedIn()) {
        if (hasPermissions(findOption(nextState.location.pathname))) {
          callback();
        } else {
          replace(ROUTES_LANDING.MAIN.path);
          callback();
        }
      } else {
        replace(ROUTES_LANDING.LOGIN.path);
        callback();
      }
    });
  },

};