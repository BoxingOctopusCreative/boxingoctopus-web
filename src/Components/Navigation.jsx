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
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/projects">Projects</Nav.Link>
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