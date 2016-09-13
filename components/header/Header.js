import React, {
  Component
} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="site-header-container">
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Page1</a></li>
            <li><a href="#">Page2</a></li>
          </ul>
        </div>
      </header>
    );
  }
}
