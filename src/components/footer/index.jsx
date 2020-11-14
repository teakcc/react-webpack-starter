import './index.scss';

import React, { Component } from 'react';

import { Container } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <div className="site-footer">
        <Container className="site-footer-inner">
          <p>&copy; 2019 Wang Chi</p>
        </Container>
      </div>
    );
  }
}
