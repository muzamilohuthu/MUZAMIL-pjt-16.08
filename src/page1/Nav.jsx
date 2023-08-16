import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoimg from './images/brandlogo-min.png';


import { NavLink, useLocation } from 'react-router-dom';

const Navbarr = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/admin'
  || location.pathname === '/page1' || location.pathname === '/page2'|| location.pathname === '/page3' || location.pathname === '/page4'
  || location.pathname === '/page5' || location.pathname === '/page6' || location.pathname === '/unauthorized' ) {
    return null; // Don't render the navbar on login and signup pages
  }

  return (
    <>
      {isHomePage && (
        <div className={`tagline ${isScrolled ? 'hidden' : ''} pt-2 pb-2`}>
          <span>
            Start today with knowledge, we provide students with optimum and best result <b>seeking strategies</b>
          </span>
          <button className="cancelbutton me-4" onClick={() => setIsScrolled(true)}>
            &#10005;
          </button>
        </div>
      )}
      <Navbar
        expand="lg"
        className={`fixed-top ${isHomePage ? (isScrolled ? 'navbar-background' : 'navbar-transparent') : 'navbar-background'}`}
      >
        <Navbar.Brand href="#">
          <img className="ps-5" src={logoimg} alt="logo" />
          <NavLink to='/'><h5 className="logoname">Educt.</h5></NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className={`text-dark nav-link${isHomePage ? '' : ' whitetextnav'}`}>
              Home
            </NavLink>
            <NavLink to="/careers" className={`text-dark nav-link${isHomePage ? ' whitetextnav' : ''}`}>
              Class
            </NavLink>
            <NavLink to="/blog" className={`text-dark nav-link${isHomePage ? ' whitetextnav' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/aboutus" className={`text-dark nav-link${isHomePage ? ' whitetextnav' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={`text-dark nav-link${isHomePage ? ' whitetextnav' : ''}`}>
              Contact
            </NavLink>
            <NavLink to="/cart" className={`text-dark nav-link${isHomePage ? ' whitetextnav' : ''}`}>
        Cart&nbsp;
        <FaShoppingCart />
     
      </NavLink>
          </Nav>
          <Nav className="ml-auto me-5 ms-5 signandlog">
            <NavLink
              className={`loginbut nav-link${isHomePage ? ' whitetextnav' : ''}`}
              to="/login"
            >
              Login
            </NavLink>
            <div className="my-5 my-lg-0"></div>
            <NavLink
              className={`signinbut nav-link${isHomePage ? ' whitetextnav' : ''}`}
              to="/signup"
            >
              Sign Up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbarr;









