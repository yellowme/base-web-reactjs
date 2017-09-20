import React from 'react';
import { Layout } from 'antd';
import Menu from 'components/Menu';
// import Footer from './../shared/components/Footer.js';
import { ROUTES_MAIN } from 'utils/constants';
const { Header, Content } = Layout;

class LayoutMain extends React.Component {
  render() {
    return (
      <Layout className='application' >
        <Header className='header' >
          <Menu options={ROUTES_MAIN} />
        </Header>
        <Content>
          {this.props.children}
        </Content>
        {/* <!--Footer /--> */}
      </Layout>
    );
  }
}

export default LayoutMain;