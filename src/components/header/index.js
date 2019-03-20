import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="site-header">
    <div className="navbar">
      <div className="logo">
        <h1 className="text-logo"><Link to="/">React Webpack Starter</Link></h1>
      </div>
      <ul className="top-menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/products">PRODUCTS</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>
      {/* <ul className="top-menu top-login">
        <li><Link to="/login">Login</Link></li>
      </ul> */}
    </div>
    <div className="site-info">
      <h1 className="title">React Webpack Starter</h1>
      <p className="description">A single page application using React, Webpack, ES6, Babel and so on</p>
    </div>
  </header>
);

export default Header;
