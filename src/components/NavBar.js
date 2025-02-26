import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {useState } from "react";

export const NavBar = () => {
    
    // By default, our active link starts at home page.
    const [activeLink, setActiveLink] = useState('home');

    // We need to have a state to detect when user scroll so
    // that we can change the background color as needed
    // By defaul, we're not scrolling anywhere
    const [scrolled, setScrolled] = useState(false);
    
    
    return (
        <Navbar expand="lg">
            <Container>
                /* Will add logo here later */
                <Navbar.Brand href="#home">
                    <img src={null} alt="Logo" />
                </Navbar.Brand>
                
                /* We can add our own icon */
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Link</Nav.Link>
                        <Nav.Link href="#projects">Project</Nav.Link>
                    </Nav>
                    
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href='#'><img src={null} alt=""/></a>
                            <a href='#'><img src={null} alt=""/></a>
                            <a href='#'><img src={null} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}