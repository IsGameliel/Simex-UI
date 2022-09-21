import React from "react";
import { Navbar, Container, Nav, NavDropdown  } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <Navbar className="dark" expand="lg">
        <Container>
            <Navbar.Brand to="#home">
                <img src="img/logo.png" className="d-inline-block align-top logo" alt="simvic logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll responsive-navbar-nav">
            <Nav className="ms-auto" style={{ maxHeight: '100px' }}>
                <Link className="nav-link" to="/">home</Link>
                <Link className="nav-link" to="/about">about</Link>
                <NavDropdown title="Products" className="dropdown" id="collasible-nav-dropdown">
                    <Link className="nav-link" to="/development">Development</Link>
                    <Link className="nav-link" to="/giftcards">Giftcards</Link>
                </NavDropdown>
                <NavDropdown title="Resources" className="dropdown" id="collasible-nav-dropdown">
                    <Link className="nav-link" to="/faq">faq</Link>
                    <Link className="nav-link" to="/learn">learn more</Link>
                </NavDropdown>
                <Link className="nav-link" to="/contact">contact</Link>
            </Nav>
            <Nav className="ms-auto auth" style={{ maxHeight: '100%' }}>
                <Link className="nav-link" to="/login" target={'blank'}>Login</Link>
                <Link className="nav-link" to="/register" target={'blank'}>Register</Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Navigation;