import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class FourOhFour extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <img  
                            src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/eeby-deeby-404.jpg" 
                            alt="404"
                            width="70%"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>404 Page Not Found</h1>
                    </Col>
                </Row>
            </Container>
        );
    };
};