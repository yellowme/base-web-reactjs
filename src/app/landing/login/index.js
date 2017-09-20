import React from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { Row, Col, Form, Button } from 'antd';
import { ruleRequired, ruleEmail } from 'utils/fieldsRules';
import { ROUTES_MAIN, ROUTES_LANDING } from 'utils/constants';
import auth from 'utils/auth.js';
import Input from 'components/form/Input';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        auth.login(values)
        .then(result => {
          browserHistory.push(`${ROUTES_MAIN.MAIN.path}`);
        })
        .catch((error) => {
          this.props.form.setFields({'email': {value: values.email, errors: [ 'Email o Contraseña incorrecta' ]}});
          this.setState({ loading: false });
        });
      }
    });
  }

  get loading() {
    return this.state.loading;
  }

  render() {
    const { form } = this.props;
    return (
      <Row className='login m-t-200' type='flex' justify='center' >
        <Col span={4} >
          <h1>Login</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} className='center' >
            <Input form={form} rules={[ ruleEmail ]} name='email' placeholder='Email' type='email' />
            <Input form={form} rules={[ ruleRequired ]} name='password' placeholder='Contraseña' type='password' />
            <Button type='primary' htmlType='submit' className='submit' loading={this.loading} >
              Log in
            </Button>
            <div className='p-t-20' />
            <Link to={ROUTES_LANDING.SIGNUP.path} > Registro </Link>
          </Form>
        </Col>
      </Row>
    );
  }
}


export default Form.create()(Login);
