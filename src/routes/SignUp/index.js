import LayoutLanding from 'app/LayoutLanding';
import SignUp from 'app/landing/signup/';
import { ROUTES_LANDING } from 'utils/constants';

module.exports = {
  path: ROUTES_LANDING.SIGNUP.path,
  component: LayoutLanding,
  indexRoute: { component: SignUp },
};