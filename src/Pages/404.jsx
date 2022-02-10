import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class FourOhFour extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className='404-img'>
                            <img  
                                src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/272953166_10226322759166164_8214906071841110177_n.jpg" 
                                alt="404"
                                width="520px"
                            />
                            <div className='text-splash'>404 Page Not Found</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};