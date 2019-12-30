import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import search from "../assets/shape_2.png";
import web from "../assets/shape.png";

export default class NavbarMitra extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-link mx-auto">
              <Nav.Link href="#home" className="home_navbar">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Solution</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Partners</Nav.Link>
              <Nav.Link href="#link">Customer</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="search">
                <img src={search} alt="search" />
              </Nav.Link>
              <Nav.Link href="#link">
                <img src={web} className="web" alt="web" />
                EN | ID
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
