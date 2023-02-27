import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className='text-splash' style={{ marginBottom: "50px" }}>About</div>
          </Col>
      </Row>
      <Row>
          <Col>
            <div className='pfp-container'>
              <img className='profile-pic'
                src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/ryan-square.jpg" 
                alt="Ryan" 
                width="50%"
              />
            </div>
          </Col>
          <Col>
            <p>
              My Name is Ryan Draga. Owner and Founder of Boxing Octopus Creative; the Toronto-based digital content brand with many tentacles. 
              <br />
              <br />
              I created this website (and the Boxing Octopus brand) to showcase my work both as a developer and graphic designer.
              <br />
              <br />
              With that said, I am also available for any freelance work. My information can be found on the Contact page.
            </p>
          </Col>
        </Row>
      </Container>
    );
  };
};