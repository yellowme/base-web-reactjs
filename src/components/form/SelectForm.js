import React from 'react';
import PropTypes from 'prop-types';
import {Form, Select} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class SelectForm extends React.Component {
  render() {
    const { rules, name, value, placeholder, options, mode, handleChange, hasFeedback } = this.props;
    const {getFieldDecorator} = this.props.form;
    const listOptions = options.map((option, index) =>
      <Option key={option.value} value={option.value}>{option.label}</Option>
    );

    return (
      <FormItem hasFeedback={hasFeedback}>
        {getFieldDecorator(name, {
          initialValue: value,
          rules,
        })(
          <Select placeholder={placeholder}
                  mode={mode}
                  onChange={handleChange}>
            {listOptions}
          </Select>
        )}
      </FormItem>
    );
  }
}
;

SelectForm.defaultProps = {
  handleChange() {
  },
  hasFeedback: true,
};

SelectForm.propTypes = {
  form: PropTypes.object.isRequired,
  rules: PropTypes.array,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array,
  mode: PropTypes.string,
  handleChange: PropTypes.func,
  hasFeedback: PropTypes.bool,
};

export default SelectForm;
