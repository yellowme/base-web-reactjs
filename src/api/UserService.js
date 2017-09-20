import Api from './Api';

module.exports = {

  register(user) {
    return Api.post('user/register/', user);
  },

  current() {
    return Api.get('user/current', {}, {});
  },

};
