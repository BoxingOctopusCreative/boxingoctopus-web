import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class FourOhFour extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <div className='text-splash'>404 Page Not Found</div>
                </Col>
            </Row>
        );
    };
};