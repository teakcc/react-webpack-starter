import './index.scss';

import React, { Component } from 'react';
import ContentTitle from '../../components/content-title';
import Content from '../../components/content';

class Documents extends Component {
  render() {
    return (
      <>
        <ContentTitle title="Documents" />
        <Content>
          <div className="documents placeholder">Documents</div>
        </Content>
      </>
    );
  }
}

export default Documents;
