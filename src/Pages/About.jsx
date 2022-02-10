import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <div className='text-splash'>This is the About Me Page</div>
                </Col>
            </Row>
        );
    };
};