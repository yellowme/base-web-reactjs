import LayoutLanding from 'app/LayoutLanding';
import Login from 'app/landing/login/';
import { ROUTES_LANDING } from 'utils/constants';

module.exports = {
  path: ROUTES_LANDING.LOGIN.path,
  component: LayoutLanding,
  indexRoute: { component: Login },
};