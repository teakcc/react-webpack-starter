import './styles/index.scss';

import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './router';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header></Header>
          {
            routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.component {...props} routes={route.routes}/>
                )}/>
            ))
          }
        </Fragment>
      </Router>
    );
  }
}

export default hot(module)(App);
