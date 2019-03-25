// import './index.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand>RWS</NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/components">Components</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/documents">Documents</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/login">Login</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        {/* <header className="site-header">
          <div className="navbar">
            <div className="logo">
              <h1 className="text-logo"><Link to="/">React Webpack Starter</Link></h1>
            </div>
            <ul className="top-menu">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/products">PRODUCTS</Link></li>
              <li><Link to="/about">ABOUT US</Link></li>
              <li><Link to="/contact">CONTACT US</Link></li>
              <li><Link to="/login">LOGIN</Link></li>
            </ul>
          </div>
          <div className="site-info">
            <h1 className="title">React Webpack Starter</h1>
            <p className="description">A single page application using React, Webpack, ES6, Babel and so on</p>
          </div>
        </header> */}
      </>
    );
  }
}

export default Header;
