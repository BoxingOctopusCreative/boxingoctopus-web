import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <img className="logo-splash" src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/Logo%20White.png" alt="logo" />
                </Col>
                <Col>
                    <div className='text-splash'>Boxing Octopus Creative is a Toronto-Based Digital Content Brand With Many Tentacles</div>
                </Col>
            </Row>
        );
    };
};