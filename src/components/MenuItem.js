import React, {Component} from 'react';
import intl from 'react-intl-universal';
import { Menu } from 'antd';
import { Link } from 'react-router';
import { renderOptionMenu } from 'helpers/menuHelper';

class MenuItem extends Component {

  render() {
    const { option } = this.props;
    if (!renderOptionMenu(option)) {return null;}
    return (
      <Menu.Item {...this.props} >
        <Link to={option.path} > {intl.get(option.name)} </Link>
      </Menu.Item>
    );
  }
}

export default MenuItem;
