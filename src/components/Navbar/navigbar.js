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
import { NavItem } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import imgx  from '../../fetureimge.jpg';


const Navbarx = () => {
  return (  
    
<>
    <div > 
    <img src={imgx}  className="img-fluid" alt="Responsive image"></img>
 </div>
    
    
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><a className="navbar-brand" href="#"sitelogo><img src={logo} alt="Tan Ki Bat "/></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
   
      
     
     
     
     
     
     
    
    
       <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          
          <NavLink to='/youtube' activeStyle>
            Youtube
          </NavLink>
           
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
         
     
    </Nav>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><NavLink to='/youtube' activeStyle>
            Youtube
          </NavLink></NavDropdown.Item>
        
        <NavDropdown.Item href="#action/3.2">  
        <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
        
        
        </NavDropdown.Item>
        
        </NavDropdown>
      
     
    
    
    
    
    
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</>
  );
};
  
export default Navbarx;