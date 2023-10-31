import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const navlinks = {
  position: "absolute",
  right: 0,
};

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">RR Enterprise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={navlinks}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Live Projects</Nav.Link>
            <Nav.Link href="#link">Our Partner</Nav.Link>
            <Nav.Link href="#link">Contact Information</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
