import LayoutLanding from 'app/LayoutLanding';
import SignUp from 'app/landing/signup/';
import { ROUTES_LANDING } from 'utils/constants';

export default {
  path: ROUTES_LANDING.SIGNUP.path,
  component: LayoutLanding,
  indexRoute: { component: SignUp },
};
