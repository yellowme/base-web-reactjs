import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();
export const APP_VERSION = '0.0.1';
export const API_KEY_BUGSNAG = env.REACT_APP_API_KEY_BUGSNAG;

export const STORAGE_KEY_TOKEN = 'app_token';
export const STORAGE_KEY_USER = 'app_user';

export const ROUTES_LANDING = {
  HOME: {
    path: '/',
    name: 'MENU.MAIN',
  },
  LOGIN: {
    path: '/login',
    name: 'MENU.SIGNIN',
    session: false,
  },
  SIGNUP: {
    path: '/signup',
    name: 'MENU.SIGNUP',
    session: false,
  },
  MAIN: {
    path: '/main',
    name: 'MENU.MAIN',
    session: true,
  },
};

export const ROUTES_MAIN = {
  MAIN: {
    path: '/main',
    name: 'MENU.MAIN',
    permissions: false,
  },
  LOGOUT: {
    path: '/logout',
    name: 'MENU.LOGOUT',
    permissions: false,
  },
};

export const ROUTES_GENERAL = {
  MAINTENANCE: {
    path: '/maintenance',
    name: 'Mantenimiento',
  },
};