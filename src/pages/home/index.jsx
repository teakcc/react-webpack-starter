import './index.scss';

import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Content from '../../components/content';
import Loading from '../../components/Loading';
// import List from './List';

import Swiper from '../../components/swiper';

const AsyncList = Loadable({
  loader: () => import('./List'),
  loading: Loading,
});

class Home extends Component {
  render() {
    return (
      <>
        <Swiper />
        <Content>
          <div className="placeholder">Home Content</div>
          <AsyncList />
        </Content>
      </>
    );
  }
}

export default Home;
