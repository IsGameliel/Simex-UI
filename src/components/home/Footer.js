import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Footer(){
    return(
        <div className="footer">
            <img src="img/g1.png" className="footerstyle" alt="footer style" />
            <div className="footerbg">
            <Navbar className="dark footnav" expand="lg">
            <Container>

                <Navbar.Brand className="navbar" href="#home">
                    {/* <img src="img/logo.png" className="d-inline-block align-top logo" alt="simvic logo" /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto" style={{ maxHeight: '100px' }}>
                    <Nav.Link href="#action1">home</Nav.Link>
                    <Nav.Link href="#action2">about</Nav.Link>
                    <Nav.Link href="#action2"><img src="img/logo.png" className="d-inline-block align-top logo" alt="simvic logo" /></Nav.Link>
                    <Nav.Link href="#action2">transact</Nav.Link>
                    <Nav.Link href="#action3">contact</Nav.Link>
                </Nav>
                <Nav className="ms-auto" style={{ maxHeight: '100%' }}>
                  
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className="copywrite_bg">
                <Container>
                    <p>2022 copywrite simvic all right reserved</p>
                </Container>
            </div>
            </div>
        </div>
    );
}

export default Footer;