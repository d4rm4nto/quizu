import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap/';
import Logo from '../assets/img/Logo.png';



const NavBar = () => {
    return (
        <div className='z-[100]'>
            <Navbar className='backdrop-blur-md bg-white/30 text-center' variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="#home"><img className='w-20 h-25' src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Quiz">Quiz</Nav.Link>
                            <Nav.Link href="#features">Tentang</Nav.Link>
                            <Nav.Link href="/Login">Masuk</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar