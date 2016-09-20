import React, {
  Component
} from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="site-header-container">
          <div className="logo">
            <h1 className="text-logo"><Link to="/">React Webpack</Link></h1>
          </div>
          <ul className="top-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page1">Page1</Link></li>
            <li><Link to="/page2">Page2</Link></li>
          </ul>
          <ul className="top-menu top-login">
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </header>
    );
  }
}
