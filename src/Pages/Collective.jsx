import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Collective extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className='text-splash' style={{ marginBottom: "50px" }}>Collective</div>
          </Col>
      </Row>
      <Row>
          <Col>
            <div className='pfp-container'>
              <img className='collective-logo'
                src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img%2Fcollective-logo.png" 
                alt="Ryan" 
                width="50%"
              />
            </div>
          </Col>
          <Col>
            <p>
              One of my great passions in life is not only learning, but mentoring and passing on knowledge to others.
              <br />
              <br />
              To that end, I created a Discord server where folks can collaborate and learn from one another. We all have things we're passionate about, and I want to help people share their passion and knowledge with others.
              <br />
              <br />
              With that said, I hope you'll join us.
            </p>
          </Col>
          <Col>
            <div className='pfp-container'>
              <iframe 
                title="Discord"
                src="https://discord.com/widget?id=581293084076408843&theme=dark" 
                width="350" 
                height="500" 
                allowtransparency="true" 
                frameborder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
              </iframe>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
};