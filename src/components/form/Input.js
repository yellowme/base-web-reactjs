import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
const FormItem = Form.Item;

class InputForm extends React.Component {
  render() {
    const { rules, name, type, value, placeholder, getValueProps, getValueFromEvent, rows, hasFeedback } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem hasFeedback={hasFeedback} >
        {getFieldDecorator(name, {
          initialValue: value,
          getValueProps,
          getValueFromEvent,
          validateTrigger: 'onBlur',
          rules })(
          <Input type={type} placeholder={placeholder} rows={rows} {...this.props.inputProps}/>
        )}
      </FormItem>
    );
  }
};

InputForm.defaultProps = {
  rows: 4,
  hasFeedback: true,
};

InputForm.propTypes = {
  form: PropTypes.object.isRequired,
  rules: PropTypes.array,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  hasFeedback: PropTypes.bool,
};

export default InputForm;
