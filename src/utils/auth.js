import { browserHistory } from 'react-router';
import Storage from 'utils/storage';
import { ROUTES_LANDING, ROUTES_GENERAL, STORAGE_KEY_TOKEN, STORAGE_KEY_USER } from 'utils/constants';
import SessionService from 'api/SessionService';
import UserService from 'api/UserService';

class Auth {

  login(values) {
    return SessionService.create(values)
    .then(result => {
      Storage.setJsonObject(STORAGE_KEY_TOKEN, result.data);
      return this.loadCurrentUser();
    });
  }

  loadCurrentUser() {
    return UserService.current()
    .then(user => {
      Storage.setJsonObject(STORAGE_KEY_USER, user);
      return user;
    }).catch(err => {
      this.handdleErrorNetwork(err);
    });
  }

  logout() {
    Storage.removeJsobObject(STORAGE_KEY_TOKEN);
    Storage.removeJsobObject(STORAGE_KEY_USER);
    browserHistory.push(ROUTES_LANDING.HOME.path);
  }

  getToken() {
    return Storage.getJsonObject(STORAGE_KEY_TOKEN).token;
  }

  getUser() {
    return Storage.getJsonObject(STORAGE_KEY_USER);
  }

  loggedIn() {
    return Storage.getJsonObject(STORAGE_KEY_TOKEN) && !!this.getToken();
  }

  handdleErrorNetwork(err) {
    if (err instanceof TypeError) {
      if (err.message === 'Failed to fetch') {
        browserHistory.push(ROUTES_GENERAL.MAINTENANCE.path);
      }
    } else {
      this.logout();
    }
  }
}

export default new Auth();
