require('../styles/main.scss');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header/Header';

let a = 1;
console.log('Hello World');

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
