import React                      from 'react';
import intl                       from 'react-intl-universal';
import { Link }                   from 'react-router';
import { Row, Col, Form, Button } from 'antd';
import { ruleEmail }              from 'utils/fieldsRules';
import { ROUTES_LANDING }         from 'utils/constants';
import auth                       from 'utils/auth.js';
import Input                      from 'components/form/Input';

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
        auth.recovery(values.email)
        .then(result => {
          alert('Email con instrucciones enviado');
          this.setState({ loading: false });
        })
        .catch((error) => {
          alert(error);
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
          <h1>{intl.get('RECOVERY.TITLE')}</h1>
          <Form onSubmit={this.handleSubmit.bind(this)} className='center' >
            <Input form={form} rules={[ ruleEmail ]} name='email' placeholder={intl.get('LABEL.EMAIL')} type='email' />
            <Button type='primary' htmlType='submit' className='submit' loading={this.loading} >
              {intl.get('BUTTON.REQUEST')}
            </Button>
            <div className='p-t-10' />
            <Link to={ROUTES_LANDING.LOGIN.path} > {intl.get('BUTTON.LOGIN')} </Link>
          </Form>
        </Col>
      </Row>
    );
  }
}


export default Form.create()(Login);
