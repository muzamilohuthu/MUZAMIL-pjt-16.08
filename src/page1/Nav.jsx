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























// import Nav from 'react-bootstrap/Nav';
// import React from 'react';
// import { NavLink} from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';

// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// function Navbarr() {
//   return (
//     <Navbar bg="light" expand="lg" >
//       <Container fluid>
//         <Navbar.Brand> <h1  className='h1fsfl font-weight-bold'>Yoga <span style={{color:`#f0ad4e`}} >Day</span></h1> </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0 hacbutton"
//             style={{ maxHeight: '100px' , TextDecoder:"none" }}
//             navbarScroll
//           >
            
//             <Button variant="light" className='navnavbtn' ><NavLink  exact to="/" activeClassName="active" style={{ maxHeight: '100px' , textDecoration:"none" , color:"black" }}>Home</NavLink></Button>{' '}
//             <Button variant="light"><NavLink to="/about" activeClassName="active" style={{ maxHeight: '100px' , textDecoration:"none", color:"black" }}>About Us</NavLink></Button>{' '}
//             <Button variant="light"><NavLink to="/contact" activeClassName="active" style={{ maxHeight: '100px' , textDecoration:"none" , color:"black"}}>Contact Us</NavLink></Button>{' '}
//             <Button variant="light"><NavLink to="/lounge" activeClassName="active" style={{ maxHeight: '100px' , textDecoration:"none" , color:"black"}}>Dashboard</NavLink></Button>
//             <a href="http://localhost:3000/" target='blank'><Button variant="light">Course</Button></a>
//             <NavDropdown title="Creact Account"  id="navbarScrollingDropdown" className='stylelstext '>
//               <NavDropdown.Item    activeClassName="active"> <NavLink to="/signup" className='stylelstext'> Sign Up</NavLink></NavDropdown.Item>
              
//               <NavDropdown.Item    activeClassName="active"> <NavLink to="/login" className='stylelstext'> Log In</NavLink></NavDropdown.Item>
              
              
              
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             {/* <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link> */}
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbarr;




// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { FaShoppingCart } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logoimg from './images/brandlogo.png';


// const Navbarr = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY > 0;
//       setIsScrolled(scrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`tagline ${isScrolled ? 'hidden' : ''} pt-2 pb-2`}>
//         <span >
//           Start today with knowledge, we provide students with optimum and best result <b>seeking strategies</b>
//         </span>
//         <button className="cancelbutton me-4" onClick={() => setIsScrolled(true)}>
//           &#10005;
//         </button>
//       </div>
//       <Navbar expand="lg" className={`fixed-top ${isScrolled ? 'navbar-background' : 'navbar-transparent'}`}>
//         <Navbar.Brand href="#">
//           <img className='ps-5' src={logoimg} alt="logo" />
//           <h5 className="logoname " >Educt.</h5>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mx-auto">
//             <Nav.Link href="#Home"  className='textdark'>Home</Nav.Link>
//             <Nav.Link href="#careers" className='textdark'>Careers</Nav.Link>
//             <Nav.Link href="#blog" className='textdark'>Blog</Nav.Link>
//             <Nav.Link href="#about" className='textdark'>About Us</Nav.Link>
//             <Nav.Link href="#contact " className='whitetextnav'>Contact</Nav.Link>
//             <Nav.Link href="#Cart " className='whitetextnav'>Cart &nbsp;<FaShoppingCart/></Nav.Link>
//           </Nav>
//           <Nav className="ml-auto me-5  ms-5 signandlog">
//           <Nav.Link href="#log"   className='whitetextnav'>Login</Nav.Link>
//             <div className="my-5 my-lg-0"></div>
//             <Nav.Link href="#signup" className='whitetextnav'>Sign Up</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// };

// export default Navbarr;