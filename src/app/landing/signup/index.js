import React from 'react';
import { Row, Col, Form, Button } from 'antd';
import { browserHistory } from 'react-router';
import Input from 'components/form/Input';
// import Checkbox from 'components/form/Checkbox';
import auth from 'utils/auth.js';
import UserService from 'api/UserService';
import { ruleRequired, ruleEmail } from 'utils/fieldsRules';
import { Link } from 'react-router';
import { ROUTES_MAIN, ROUTES_LANDING } from 'utils/constants';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.password !== values.passwordConfirmation) {
          this.props.form.setFields({ password: { value: values.password, errors: [ 'Las contraseñas no son iguales' ] } });
        } else {
          this.setState({ loading: true });
          UserService.register(values)
          .then(() => {
            return auth.login(values);
          }).then(() => {
            this.setState({ loading: false });
            browserHistory.push(`${ROUTES_MAIN.MAIN.path}`);
          }).catch((error) => {
            console.log(error);
            this.setState({ loading: false });
          });
        }
      }
    });
  }

  get loading() {
    return this.state.loading;
  }

  render() {
    const { form } = this.props;
    return (
      <Row className='login m-t-100' type='flex' justify='center' >
        <Col span={5} >
          <h1>Registro</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} className='center' >
            <Input form={form} rules={[ ruleRequired ]} name='name' placeholder='Nombre' />
            <Input form={form} rules={[ ruleRequired ]} name='company' placeholder='Empresa' />
            <Input form={form} rules={[ ruleEmail ]} name='email' placeholder='Email' type='email' />
            <Input form={form} rules={[ ruleRequired ]} name='password' placeholder='Contraseña' type='password' />
            <Input form={form} rules={[ ruleRequired ]} name='passwordConfirmation' placeholder='Confirma Contraseña' type='password' />
            {/* <Checkbox form={form} rules={[  ]} name='isDemo' label='Usuario demo' /> */}
            <Button type='primary' htmlType='submit' className='submit' loading={this.loading} >
              Registro
            </Button>
            <div className='p-t-20' />
            <Link to={ROUTES_LANDING.SIGNUP.path} > Login </Link>
          </Form>
        </Col>
      </Row>
    );
  }
}


export default Form.create()(SignUp);
