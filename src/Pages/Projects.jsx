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
                            <img src="https://ryandraga.me/content/images/2021/06/Banner-Logo-2.png" width="400px" alt="Ryan Draga's Nerd Emporium"/>
                        </a>
                    </Col>
                    <Col>
                        <h3>Ryan Draga's Nerd Emporium</h3>
                        <p className="project-list">
                            My Personal Blog, featuring my work, my thoughts, and my life.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="project-list">
                        <a href="https://mylifeinmusic.me" target="_blank" rel="noreferrer">
                            <img src="https://mylifeinmusic.me/content/images/size/w600/2021/05/MLiM-Title.png" width="400px" alt="My Life In Music"/>
                        </a>
                    </Col>
                    <Col>
                        <h3>My Life In Music</h3>
                        <p className="project-list">
                            A project I started wherein I attempt to catalogue all the random music I get stuck in my head through Spotify.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="project-list">
                        <a href="https://chainsinventinsanity.com" target="_blank" rel="noreferrer">
                            <img src="https://chains-invent-insanity-assets.sfo3.digitaloceanspaces.com/Logo%20Black.png" width="400px" alt="Chains Invent Insanity"/>
                        </a>
                    </Col>
                    <Col>
                        <h3>Chains Invent Insanity</h3>
                        <p className="project-list">
                            A Cards Against Humanity Card Generator that uses Markov Chains to generate cards; built with React and Flask.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="project-list">
                        <a href="https://kuratorapp.io" target="_blank" rel="noreferrer">
                            <img src="https://kurator-public-assets.nyc3.digitaloceanspaces.com/Logo-Black-Wide.png" width="400px" alt="Kürator"/>
                        </a>
                    </Col>
                    <Col>
                        <h3>Kürator</h3>
                        <p className="project-list">
                            A web application built to help retro video game collectors track and manage their collections; built with React and Flask.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    };
};