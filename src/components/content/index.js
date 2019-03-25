import './index.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from 'reactstrap';

export default class Content extends Component {
  render() {
    return (
      <Container className="content">
        { this.props.children }
      </Container>
    );
  }
}

Content.propTypes = {
  children: PropTypes.any
};

Content.defaulProps = {
  children: []
};
