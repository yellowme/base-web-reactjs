import Api from './Api';

export default {

  create(data) {
    return Api.post('session', data);
  },

};
