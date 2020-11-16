import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export default class ContentTitle extends Component {
  render() {
    return <div className="content-title">{this.props.title}</div>;
  }
}

ContentTitle.propTypes = {
  title: PropTypes.string,
};

ContentTitle.defaultProps = {
  title: 'Undefined Title',
};
