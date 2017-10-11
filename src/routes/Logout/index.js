import LayoutMain from 'app/LayoutMain';
import Logout from 'app/landing/logout/';
import { ROUTES_MAIN } from 'utils/constants';
import Validation from 'utils/validation.js';

export default {
  path: ROUTES_MAIN.LOGOUT.path,
  component: LayoutMain,
  indexRoute: { component: Logout },
  onEnter: Validation.redirectToLogin,
};
