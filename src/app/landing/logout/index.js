import React from 'react';
import auth from 'utils/auth.js';

class Logout extends React.Component {

  componentWillMount() {
    auth.logout();
  }

  render() {
    return (
      <div />
    );
  }
}


export default Logout;
