import GenericNotFound from 'components/GenericNotFound';

export default {
  path: '/*',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, GenericNotFound);
    });
  },
};
