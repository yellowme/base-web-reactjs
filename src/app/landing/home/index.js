import React              from 'react';
import intl               from 'react-intl-universal';
import { Firebase }       from 'api/Firebase';
import { Row, Col }       from 'antd';
import { Link }           from 'react-router';
import { ROUTES_LANDING } from 'utils/constants';

class Home extends React.Component {

  constructor() {
    super();
    this.state = { name: 'No reading data from firebase' };
  }

  componentDidMount() {
    const nameRef = Firebase.database().ref().child('name');
    nameRef.on('value', snapshot => {
      this.setState({ name: snapshot.val() });
    });

  }

  render() {
    return (
      <Row>
        <Col span={10} offset={3} >
          <h1>Hi "{this.state.name}" from Firebase</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
          <Link to={ROUTES_LANDING.SIGNUP.path} > {intl.get('BUTTON.SIGNUP')} </Link>
        </Col>
      </Row>
    );
  }
}


export default Home;
