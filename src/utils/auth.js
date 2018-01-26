import { browserHistory } from 'react-router';
import { Firebase }       from 'api/Firebase';
import { ROUTES_LANDING, ROUTES_GENERAL, DATABSE_ENTITY_USERS } from 'utils/constants';

class Auth {


  register(data) {
    let user;
    return Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(response => {
      user = response;
      let ref = Firebase.database().ref(DATABSE_ENTITY_USERS);
      ref.push({
        uid: user.uid,
        name: data.name,
        email: user.email,
      });
      return Firebase.auth().currentUser.sendEmailVerification();
    });
  }

  login(data) {
    return Firebase.auth().signInWithEmailAndPassword(data.email, data.password);
  }

  recovery(email) {
    return Firebase.auth().sendPasswordResetEmail(email);
  }

  loadCurrentUser() {
    return new Promise((resolve, reject) => {
      Firebase.auth().onAuthStateChanged(user => {
        resolve();
      });
    });
  }

  logout() {
    Firebase.auth().signOut().then(() => {
      browserHistory.push(ROUTES_LANDING.HOME.path);
    });
  }

  loggedIn() {
    return !!Firebase.auth().currentUser;
  }

  handdleErrorNetwork(err) {
    if (err instanceof TypeError) {
      if (err.message === 'Failed to fetch') {
        browserHistory.push(ROUTES_GENERAL.MAINTENANCE.path);
      }
    } else {
      this.logout();
    }
  }
}

export default new Auth();
