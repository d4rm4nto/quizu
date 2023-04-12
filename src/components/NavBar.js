import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap/";
import Logo from "../assets/img/Logo.png";
import { useState } from "react";

const NavBar = () => {
  return (
    <div className='sticky-top'>
      <Navbar className='backdrop-blur-md bg-white/30 text-center' variant="light" expand="md">
        <Container>
          <Navbar.Brand href="#home"><img className='w-20 h-25' src={Logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="mx-2">Home</Nav.Link>
              <Nav.Link href="/Quiz" className="mx-2">Quiz</Nav.Link>
              <Nav.Link href="#features" className="mx-2">Tentang</Nav.Link>
              <Nav.Link href="/Login" className="mx-2">Masuk</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
