import auth from 'utils/auth.js';
import { objectToArray } from 'utils/utils';
import { ROUTES_MAIN } from 'utils/constants';

const _hasSession = (option) =>
  (option.session === undefined) || (option.session && auth.loggedIn()) || (!option.session && !auth.loggedIn());

export const hasPermissions = (option) =>
  !option.permissions || auth.getUser().isAdmin || auth.getUser().permissions.includes(option.path);

export const renderOptionMenu = (option) =>
  _hasSession(option) && hasPermissions(option);

export const findOption = (path) => {
  for (let option of objectToArray(ROUTES_MAIN)) {
    if (option[0].path === path) {
      return option[0];
    }
  }
};
