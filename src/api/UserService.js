import Api from './Api';

export default {

  register(user) {
    return Api.post('user/register/', user);
  },

  current() {
    return Api.get('user/current', {}, {});
  },

};
