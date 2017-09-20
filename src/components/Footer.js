import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

class FooterApp extends React.Component {
  render() {
    return (
      <Footer>
        <ul>
          <li>© FOOTER</li>
        </ul>
      </Footer>
    );
  }
}

export default FooterApp;
