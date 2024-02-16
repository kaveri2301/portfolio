import React from 'react'
import { Col, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import '../Assets/CSS/Navbar.css'
// import { Link, animateScroll as scroll } from 'react-scroll';
// import  {navitems} from '../Scroll'

export default function Navbars() {
//   const scrollToTop = () => {
//     scroll.scrollToTop();
// };


  return (
  <>
  
 
    <Navbar expand="lg" className=" ">
    <Container>
  
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='togglebtn'/>
      <Navbar.Collapse id="basic-navbar-nav" className='mainpage'>
        <Nav className="me-auto ">
          <Nav.Link href="#home" >Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Dropdown 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Dropdown 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Dropdown 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Dropdown 4
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

   {/* <Col>
                       
                       {
                           navitems.map((a, index) => (
                               <Link
                                   key={index}
                                   activeClass="active"
                                   to={a.section}
                                   spy={true}
                                   smooth={true}
                                   offset={-70}
                                   duration={500}
                               >
                                   <p className='ps-5 text-white fs-4 '>{a.icon}<span className='ps-3 fs-6'>{a.item}</span></p>

                               </Link>
                           ))
                       }
                   </Col>  */}
  </>
  )
}
