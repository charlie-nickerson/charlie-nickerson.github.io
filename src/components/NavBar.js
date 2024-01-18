import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/UserCircle.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/Github=White.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
    
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('about')}>About</Nav.Link>
                    <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('work')}>Work</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/charlie-nickerson-5480321ba/"><img src={navIcon1} alt="" /></a>
                        <a href="https://github.com/charlie-nickerson"><img src={navIcon3} alt="" /></a>
                    </div>
                    <button className='vvd' onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
