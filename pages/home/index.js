import React, { Component } from 'react';
import TopBanner from '../../components/top-banner';
import Content from '../../components/content';
import Footer from '../../components/footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <TopBanner/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
