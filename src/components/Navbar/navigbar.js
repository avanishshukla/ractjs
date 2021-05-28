import React from 'react';
import {
 
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink, 
  
} from './NavbarElements';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import  Navbar from 'react-bootstrap/Navbar';

import logo from '../../sitelogo.png';

import imgx  from '../../fetureimge.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Navbarx = () => {
  return (  
    
<>
<Container>
<Row>
<Col sm={4} lg={12} md={12}>
    <img src={imgx}  className="img-fluid" alt="Responsive image"></img>

    
    
    <Navbar className="navxy" expand="lg">
  <Navbar.Brand href="#home"><a className="navbar-brand" href="#"sitelogo><img src={logo} alt="Tan Ki Bat "/></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
   
      
     
     
     
     
     
    <NavLink to='/blogs' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
    
       <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/healthyfood' activeStyle>
            Healthy Food
          </NavLink>
          
          <NavLink to='/youtube' activeStyle>
            Recent Video
          </NavLink>
           
          <NavLink to='/team' activeStyle>
            Team
          </NavLink>
         
          
         
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</Col>
</Row>
</Container>
</>
  );
};
  
export default Navbarx;