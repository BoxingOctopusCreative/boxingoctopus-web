import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class FourOhFour extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="1"></Col>
                    <Col sm="1"></Col>
                    <Col sm="10">
                        <img 
                            src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/eeby-deeby-404.jpg" 
                            alt="404"
                            width="70%"
                            style={{ marginTop: "100px", marginLeft: "40px" }}
                        />
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="1"></Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className='vertical-center'>404 Page Not Found</h1>
                    </Col>
                </Row>
            </Container>
        );
    };
};