import './index.scss';

import React, { Component } from 'react';
import Content from '../../components/content';
import Footer from '../../components/footer';

class Contact extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="contact placeholder">Contact us</div>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default Contact;
