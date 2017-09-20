import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from 'antd';
const FormItem = Form.Item;

class CheckboxForm extends React.Component {
  render() {
    const { rules, name, label, value, getValueProps, getValueFromEvent, hasFeedback } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <FormItem hasFeedback={hasFeedback} >
        {getFieldDecorator(name, {
          initialValue: value,
          getValueProps,
          getValueFromEvent,
          validateTrigger: 'onBlur',
          rules })(
          <Checkbox  {...this.props.inputProps}>
            {label}
          </Checkbox>
        )}
      </FormItem>
    );
  }
};

CheckboxForm.defaultProps = {
  hasFeedback: true,
};

CheckboxForm.propTypes = {
  form: PropTypes.object.isRequired,
  rules: PropTypes.array,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  hasFeedback: PropTypes.bool,
};

export default CheckboxForm;
