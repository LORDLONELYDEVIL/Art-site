import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { Link } from 'react-router-dom';







const Header = () => {
  return (
    
        <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand > <span style={{fontWeight:'bold',backgroundColor:'white'}} className='fs-4 ms-5 ps-3 lead text-dark' id='head'>LONELYDEVIL </span><span style={{fontWeight:'bold',backgroundColor:'black'}} className='fs-4 ps-2 lead text-light' id='head'> ARTS</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '>
          <Nav className="me-end me-5 " id='hr' >
            
            <Nav.Item className='fw-bold first ps-4 pe-4'><Link to="./potraits" style={{textDecoration:"none",color:'white'}}className='hor'>POTRAITS</Link></Nav.Item>
            <Nav.Item  className='fw-bold second ps-4 pe-3'><Link to='./pricing' style={{textDecoration:"none",color:'white'}}className='hor'>PRICING</Link></Nav.Item>
            <Nav.Item  className='fw-bold  ps-4 pe-3'><Link to="./contact" style={{textDecoration:"none",color:'white'}}className='hor'>CONTACT</Link></Nav.Item>
            <Nav.Item  className='fw-bold ps-4 pe-3'><Link to="./about" style={{textDecoration:"none",color:'white'}}className='hor'>ABOUT</Link></Nav.Item>
            
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header