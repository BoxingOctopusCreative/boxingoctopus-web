import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class FourOhFour extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className='text-splash' style={{ marginBottom: "50px" }}>Page Not Found</div>
          </Col>
          </Row>
          <Row>
          <Col>
            <div className='pfp-container'>
              <img className='collective-logo'
                src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/eeby-deeby-404.jpg" 
                alt="Ryan" 
                width="50%"
              />
            </div>
          </Col>
          <Col>
            <p>
              Oh No, You seem to have taken a wrong turn.
            </p>
          </Col>
        </Row>
      </Container>
    );
  };
};