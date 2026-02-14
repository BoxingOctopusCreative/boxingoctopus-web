import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <Row lg="1">
          <Col>
            <div className='text-splash' style={{ marginBottom: "50px" }}>Projects</div>
          </Col>
        </Row>
        <Row lg="5"></Row>
        <Row className="project-list">
          <Col>
            <a href="https://ryandraga.me" target="_blank" rel="noreferrer">
              <img 
                src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/nerd-emporium-banner-logo.png" 
                width="400px" 
                alt="Ryan Draga's Nerd Emporium"
              />
            </a>
          </Col>
          <Col className="project-list">
            <h3>Ryan Draga's Nerd Emporium</h3>
            <p>
              My Personal Blog, featuring my work, my thoughts, and my life.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="project-list">
            <a href="https://mylifeinmusic.me" target="_blank" rel="noreferrer">
              <img 
                src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/mlim-circular-logo.png" 
                width="400px" 
                alt="My Life In Music"
              />
            </a>
          </Col>
          <Col className="project-list">
            <h3>My Life In Music</h3>
            <p>
              A project I started wherein I attempt to catalogue all the random music I get stuck in my head through Spotify.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="project-list">
            <a href="https://hipsterdonut.myspreadshop.ca" target="_blank" rel="noreferrer">
              <img 
                src="https://assets.boxingoctop.us/img/hipsterdonut-logo-wide.png" 
                width="400px" 
                alt="Hipster Donut Apparel"
              />
            </a>
          </Col>
          <Col className="project-list">
            <h3>Hipster Donut Apparel</h3>
            <p>
              I get bored and doodle in Illustrator a lot. Sometimes I put those doodles on t-shirts and sell them. Why not buy one?
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="project-list">
            <a href="https://chainsinventinsanity.com" target="_blank" rel="noreferrer">
              <img 
                src="https://boxingoctopus-assets.nyc3.digitaloceanspaces.com/img/ci2-logo-black.png" 
                width="400px" 
                alt="Chains Invent Insanity"
              />
            </a>
          </Col>
          <Col className="project-list">
            <h3>Chains Invent Insanity</h3>
            <p>
              A Cards Against Humanity Card Generator that uses Markov Chains to generate cards; built with React and Flask.
            </p>
          </Col>
        </Row>
{/*        <Row>
          <Col className="project-list">
            <a href="https://kuratorapp.io" target="_blank" rel="noreferrer">
              <img 
                src="https://kurator-public-assets.nyc3.digitaloceanspaces.com/Logo-Black-Wide.png" 
                width="400px" 
                alt="Kürator"
              />
            </a>
          </Col>
          <Col className="project-list">
            <h3>Kürat[or]</h3>
            <p>
              A web application built to help retro video game collectors track and manage their collections; built with React and Flask.
            </p>
          </Col>
        </Row>*/}
      </Container>
    );
  };
};