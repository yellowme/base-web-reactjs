import LayoutLanding from 'app/LayoutLanding';
import Recovery from 'app/landing/recovery/';
import { ROUTES_GENERAL } from 'utils/constants';

module.exports = {
  path: ROUTES_GENERAL.RECOVERY.path,
  component: LayoutLanding,
  indexRoute: { component: Recovery },
};