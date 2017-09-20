import auth from 'utils/auth.js';
import { objectToArray } from 'utils/utils';
import { ROUTES_MAIN } from 'utils/constants';

export function renderOptionMenu(option) {
  return _hasSession(option) && hasPermissions(option);
}

export function findOption(path) {
  for (let option of objectToArray(ROUTES_MAIN)) {
    if (option[0].path === path) {
      return option[0];
    }
  }
}

export function hasPermissions(option) {
  return !option.permissions || auth.getUser().isAdmin || auth.getUser().permissions.includes(option.path);
}

function _hasSession(option) {
  return (option.session === undefined) || (option.session && auth.loggedIn()) || (!option.session && !auth.loggedIn());
}
