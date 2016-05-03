'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, browserHistory } from 'react-router';

import Login from './components/Login.js';

const ACTIVE = { color: '#f00' };

class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {/*<li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>*/}
          <li><IndexLink to="/" activeStyle={ACTIVE}>Index</IndexLink></li>
          <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
          <li><Link to="/page1" activeStyle={ACTIVE}>Page1</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  };

};

class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index</h2>
      </div>
    );
  };
};

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  };
};

class Page1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Page1</h2>
      </div>
    );
  };
};

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    );
  };
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="page1" component={Page1}></Route>
    </Route>
  </Router>
), document.getElementById('content'));