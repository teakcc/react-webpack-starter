import './index.scss';

import React, { Component } from 'react';
// import TopBanner from '../../components/top-banner';
import Content from '../../components/content';
import Footer from '../../components/footer';

class Home extends Component {
  render() {
    return (
      <div>
        {/* <TopBanner/> */}
        <Content>
          <div className="placeholder">Home Content</div>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Home;
