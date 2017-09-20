import React from 'react';
import { Layout } from 'antd';
import Menu from 'components/Menu';
// import Footer from './../shared/components/Footer.js';
import { ROUTES_LANDING } from 'utils/constants';
const { Header, Content } = Layout;

class LayoutLanding extends React.Component {
  render() {
    return (
      <Layout className='landing' >
        <Header className='header' >
          <Menu options={ROUTES_LANDING} />
        </Header>
        <Content className='body' >
          {this.props.children}
        </Content>
        {/* <!--Footer /--> */}
      </Layout>
    );
  }
}

export default LayoutLanding;
