import React                           from 'react';
import intl                            from 'react-intl-universal';
import { Row, Col, Form, Button }      from 'antd';
import { browserHistory }              from 'react-router';
import Input                           from 'components/form/Input';
import auth                            from 'utils/auth';
import { ruleRequired, ruleEmail }     from 'utils/fieldsRules';
import { Link }                        from 'react-router';
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
          this.props.form.setFields({ password: { value: values.password, errors: [ intl.get('ERROR.PASSWORD_NOT_EQUALS') ] } });
        } else {
          this.setState({ loading: true });
          auth.register(values)
          .then(() => {
            this.setState({ loading: false });
            browserHistory.push(`${ROUTES_MAIN.MAIN.path}`);
          }).catch(error => {
            this.setState({ loading: false });
            alert(error.message);
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
          <h1>{intl.get('SIGNUP.TITLE')}</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} className='center' >
            <Input form={form} rules={[ ruleRequired ]} name='name' placeholder={intl.get('LABEL.NAME')} />
            <Input form={form} rules={[ ruleEmail ]} name='email' placeholder={intl.get('LABEL.EMAIL')} type='email' />
            <Input form={form} rules={[ ruleRequired ]} name='password' placeholder={intl.get('LABEL.PASSWORD')} type='password' />
            <Input form={form} rules={[ ruleRequired ]} name='passwordConfirmation' placeholder={intl.get('LABEL.PASSWORD2')} type='password' />
            <Button type='primary' htmlType='submit' className='submit' loading={this.loading} >
              {intl.get('BUTTON.SIGNUP')}
            </Button>
            <div className='p-t-20' />
            <Link to={ROUTES_LANDING.LOGIN.path} > {intl.get('BUTTON.LOGIN')} </Link>
          </Form>
        </Col>
      </Row>
    );
  }
}


export default Form.create()(SignUp);
