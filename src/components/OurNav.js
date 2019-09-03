import React from 'react';
import { Nav, Button, Navbar } from 'react-bootstrap'
import Search from './Search'

function OurNav(){

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Social Doinks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Notifications</Nav.Link>
          <Nav.Link href="#link">Messages</Nav.Link>
        </Nav>
        <Search />
      </Navbar.Collapse>
    </Navbar>

  );
}

export default OurNav;
