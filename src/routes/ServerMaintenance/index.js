import ServerMaintenance from 'components/ServerMaintenance';
import { ROUTES_GENERAL } from 'utils/constants';

module.exports = {
  path: ROUTES_GENERAL.MAINTENANCE.path,
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ServerMaintenance);
    });
  },
};