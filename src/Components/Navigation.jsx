import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

export default class Navigation extends Component {
  render() {
    return (
      <Container fluid="xxl">
        <Row>
          <Col></Col>
          <Col>
            <Navbar fixed="top">
              <Container>
                <Navbar.Brand href="/">
                  <img 
                    src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/Logo%20White.png" 
                    className='navbar-brand-logo' 
                    alt="Boxing Octopus" 
                  />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/collective">Collective</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="https://github.com/boxingoctopus" target="_blank" rel="noreferrer">Github</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
};