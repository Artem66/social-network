import React, { Component } from 'react';
import logo from '../logo.svg';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {  
  render () {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#login">Login/Logout </Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;