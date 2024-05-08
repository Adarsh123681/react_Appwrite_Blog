import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarHead() {
  return (
    <Container style={{ margin: "0rem .5rem 0 .5rem " }}>
      <Navbar expand="lg" style={{ position: "relative" }}>
        <Navbar.Brand href="/" style={{ font: "2rem sabs-serif" }}>Vite Blogger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/createBlog" active>CreateBlog</Nav.Link>
            <Nav.Link href="/allBlog" active>AllBlog</Nav.Link>
            <Nav.Link href="/searchBlog" active>SearchBlog</Nav.Link>

          </Nav>
          <Nav >
            <Button variant="outline-primary" href="/" style={{ marginRight: "1rem", width: "7rem" }} className='md:float-right'>Sign In</Button>
            <Button variant="primary" href="/signUp" style={{ width: "7rem", marginTop: "1rem2" }}>Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default NavbarHead