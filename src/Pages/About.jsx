import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className='text-splash'>About</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/ryan-about-me.jpg" 
                            alt="Ryan" 
                            width="50%"
                        />
                    </Col>
                    <Col>
                        <p>
                            My Name is Ryan Draga. Owner and Developer of Boxing Octopus Creative; the Toronto-based digital content brand with many tentacles. 
                            <br />
                            <br />
                            I created this website to showcase my work and showcase my skills as a developer, graphic designer, and general creative.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    };
};