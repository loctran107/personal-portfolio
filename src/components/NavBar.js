import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

import {useState, useEffect } from "react";

export const NavBar = () => {
    // By default, our active link starts at home page.
    const [activeLink, setActiveLink] = useState('home');

    // We need to have a state to detect when user scroll so
    // that we can change the background color as needed
    // By defaul, we're not scrolling anywhere
    const [scrolled, setScrolled] = useState(false);
    
    // One time only run
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        
        // Window event listener detect scrolling then it will call
        // the registered onScroll function
        window.addEventListener('scroll', onScroll);
    
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    //TODO: Why not use setActiveLink directly, why do we have to go through onUpdateActiveLink?
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }



    return (
        // The navbar's CSS format can be dynamically changed based on the
        // "scolled" state
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                /* Will add logo here later */
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                
                /* We can add our own icon */
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        /* On click, it will update the active link to somehwere else */
                        <Nav.Link href="#home" className={activeLink == 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Link</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink == 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
                    </Nav>
                    
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href='#'><img src={navIcon1} alt=""/></a>
                            <a href='#'><img src={navIcon2} alt=""/></a>
                            <a href='#'><img src={navIcon3} alt=""/></a>
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