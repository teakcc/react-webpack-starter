import './styles/main.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import App from './pages/App';
import routes from './routes';

render((
  <Router
    history={browserHistory}
    routes={routes}
  />
), document.getElementById('app'));
