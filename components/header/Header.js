import React, {
  Component
} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="site-header-container">
          <div className="logo">
            <h1 className="text-logo"><a href="#">React Webpack</a></h1>
          </div>
          <ul className="top-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Page1</a></li>
            <li><a href="#">Page2</a></li>
          </ul>
          <ul className="top-menu top-login">
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </header>
    );
  }
}
