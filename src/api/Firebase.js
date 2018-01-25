import * as firebase      from 'firebase';
import runtimeEnv         from '@mars/heroku-js-runtime-env';
const env                 =    runtimeEnv();
const API_KEY             =    env.API_KEY;
const AUTH_DOMAIN         =    env.AUTH_DOMAIN;
const DATABASE_URL        =    env.DATABASE_URL;
const PROJECT_ID          =    env.PROJECT_ID;
const STORAGE_BUCKET      =    env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID =    env.MESSAGING_SENDER_ID;

const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

module.exports = {

  load(data, cb) {
    const nameRef = firebase.database().ref().child(data);
    nameRef.on('value', snapshot => {
      cb(snapshot.val());
    });
  },

};
