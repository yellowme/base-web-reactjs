import Api from './Api';

module.exports = {

  create(data) {
    return Api.post('session', data);
  },

};
