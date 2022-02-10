import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Projects extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className='text-splash'>Projects</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="https://ryandraga.me/content/images/2021/06/Banner-Logo-2.png" width="400px" alt="ryandraga.me"/>
                    </Col>
                    <Col>
                        <p>
                            My Personal Blog
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="https://mylifeinmusic.me/content/images/size/w600/2021/05/MLiM-Title.png" width="400px" alt="mylifeinmusic.me"/>
                    </Col>
                    <Col>
                        <p>
                            My Life In Music
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    };
};