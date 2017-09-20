import LayoutLanding from 'app/LayoutLanding';
import Home from 'app/landing/home/';
import { ROUTES_LANDING } from 'utils/constants';

module.exports = {
  path: ROUTES_LANDING.HOME.path,
  component: LayoutLanding,
  indexRoute: { component: Home },
};
