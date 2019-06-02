/*
  Component Description: Navigation Bar for navigation through websit
  Future updates: might switch to dashboard design instead
*/
import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Tasks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;