/*
  Component Description:
  
*/
import React, { Component } from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';

class Header extends Component {
  render(){
    return(
        <Navbar bg="light" expand="xl">
          <Navbar.Brand href="#home">Daily Grind</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tasks">Tasks</Nav.Link>
              <NavDropdown title="Workouts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Legs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Chest n Bis</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Shoulders n Tris</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Back</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
export default Header;