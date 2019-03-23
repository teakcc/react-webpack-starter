import './styles/index.scss';

import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  Button,
  Container
} from 'reactstrap';

import routes from './router';

import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header/>
          <Container>
            <Button>按钮</Button>
          </Container>
          {/* {
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
          <Footer/> */}
        </Fragment>
      </Router>
    );
  }
}

export default hot(module)(App);
