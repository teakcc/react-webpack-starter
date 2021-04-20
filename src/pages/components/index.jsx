import './index.scss';

import React, { Component } from 'react';
import ContentTitle from '../../components/content-title';
import Content from '../../components/content';

class Components extends Component {
  render() {
    return (
      <>
        <ContentTitle title="Components" />
        <Content>
          <div className="components placeholder">Components</div>
        </Content>
      </>
    );
  }
}

export default Components;
