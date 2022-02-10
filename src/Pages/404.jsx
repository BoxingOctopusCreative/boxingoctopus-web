import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class FourOhFour extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <img 
                        className="404-img" 
                        src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/272953166_10226322759166164_8214906071841110177_n.jpg" 
                        alt="404" 
                    />
                </Row>
                <Row>
                    <Col>
                        <div className='text-splash'>404 Page Not Found</div>
                    </Col>
                </Row>
            </Container>
        );
    };
};