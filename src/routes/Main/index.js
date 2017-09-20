import LayoutMain from 'app/LayoutMain';
import Main from 'app/main/';
import { ROUTES_MAIN } from 'utils/constants';
import Validation from 'utils/validation.js';

module.exports = {
  path: ROUTES_MAIN.MAIN.path,
  component: LayoutMain,
  indexRoute: { component: Main },
  onEnter: Validation.redirectToLogin,
};