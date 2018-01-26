import React                       from 'react';
import intl                        from 'react-intl-universal';
import { browserHistory }          from 'react-router';
import { Link }                    from 'react-router';
import { Row, Col, Form, Button }  from 'antd';
import { ruleRequired, ruleEmail } from 'utils/fieldsRules';
import auth                        from 'utils/auth.js';
import Input                       from 'components/form/Input';
import { ROUTES_MAIN, ROUTES_LANDING, ROUTES_GENERAL } from 'utils/constants';

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
          this.props.form.setFields({'email': {value: values.email, errors: [ intl.get('ERROR.WRONG_EMAIl') ]}});
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
            <Input form={form} rules={[ ruleEmail ]} name='email' placeholder={intl.get('LABEL.EMAIL')} type='email' />
            <Input form={form} rules={[ ruleRequired ]} name='password' placeholder={intl.get('LABEL.PASSWORD')} type='password' />
            <Button type='primary' htmlType='submit' className='submit' loading={this.loading} >
              {intl.get('BUTTON.LOGIN')}
            </Button>
            <div className='p-t-20' />
            <Link to={ROUTES_LANDING.SIGNUP.path} > {intl.get('BUTTON.REGISTER')} </Link>
            <div className='p-t-10' />
            <Link to={ROUTES_GENERAL.RECOVERY.path} > {intl.get('BUTTON.PASSWORD_RECOVERY')} </Link>
          </Form>
        </Col>
      </Row>
    );
  }
}


export default Form.create()(Login);
