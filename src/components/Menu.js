import React from 'react';
import { Menu } from 'antd';
import { objectToArray } from 'utils/utils';
import MenuItem from './MenuItem';


class MenuApp extends React.Component {

  componentWillMount() {
    this.setState({ current: window.location.pathname });
  }

  componentWillReceiveProps() {
    this.setState({ current: window.location.pathname });
  }

  render() {
    const { options } = this.props;
    const content = objectToArray(options).map((option, index) => <MenuItem key={option[0].path} option={option[0]} />);
    return (
      <Menu selectedKeys={[ this.state.current ]} mode="horizontal" >
        {content}
      </Menu>
    );
  }
}

export default MenuApp;
