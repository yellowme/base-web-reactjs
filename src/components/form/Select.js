import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
const Option = Select.Option;

class SelectForm extends React.Component {
  render() {
    const { value, placeholder, options, mode, handleChange } = this.props;
    const listOptions = options.map((option, index) =>
      <Option key={option.value} value={option.value}>{option.label}</Option>
    );
    return (
      <Select
        defaultValue={`${value}`}
        value={`${value}`}
        placeholder={placeholder}
        mode={mode}
        onChange={handleChange}>
        {listOptions}
      </Select>
    );
  }
}
;

SelectForm.defaultProps = {
  handleChange() {
  },
};

SelectForm.propTypes = {
  options: PropTypes.array,
  mode: PropTypes.string,
  handleChange: PropTypes.func,
};

export default SelectForm;
