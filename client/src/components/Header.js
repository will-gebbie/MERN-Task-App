/*
  Component Description:
  
*/
import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Daily-Grind</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tasks">Tasks</Nav.Link>
            <Nav.Link href="/budget">Budget</Nav.Link>
            <NavDropdown title="Fitness" id="basic-nav-dropdown">
              <NavDropdown.Item href="/workouts">Workouts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/notes">Notes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;