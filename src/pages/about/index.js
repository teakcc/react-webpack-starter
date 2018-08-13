import './index.scss';

import React, { Component } from 'react';
import Content from '../../components/content';
import Footer from '../../components/footer';

class About extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="about placeholder">About us</div>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default About;
