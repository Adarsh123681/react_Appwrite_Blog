import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarHead() {
  return (
    <Container style={{margin:"0rem .5rem 0 .5rem "}}>
       <Navbar expand="lg" style={{position : "relative"}}>
      <Navbar.Brand href="/" >Blogger</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/searchBlog">SearchBlog</Nav.Link>
          <Nav.Link href="/addBlog">CreateBlog</Nav.Link>
        
          <Nav.Link href="/allBlog">AllBlog</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          
        </Nav>
        <Nav style={{position:"absolute" , top:"2" , right:"0"}}>
         <Button variant="outline-primary"  href="/" style={{marginRight:"1rem"}}>Sign In</Button>
          <Button variant="primary" href="/signUp">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}

export default NavbarHead