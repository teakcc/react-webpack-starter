import React, { Component } from 'react';
import Header from '../components/header';

import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.props.children || <Home/>}
        </div>
      </div>
    );
  }
}

export default App;
