import '../styles/home.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header/Header';
import TopBanner from '../components/top-banner';
import Content from '../components/content';
import Footer from '../components/footer/Footer';

console.log('Hello World');

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TopBanner/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
