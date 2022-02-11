import React from 'react';
import { Stack, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Title from './Title';
import { Styles } from './Styles';
import Navigation from './Navigation';
import { Footer } from './Footer';


export const Layout = () => {
  return (
    <>
      <Title />
      <Styles>
        <div className="body">
          <Stack gap={3}>
            <Container fluid="xxl">
              <Row>
                <Navigation />
              </Row>
              <Row></Row>
                <div className="vertical-center">
                  <Row>
                    <Outlet />
                  </Row>
                </div>
              <Row>
                <Footer />
              </Row>
            </Container>
            <Container fluid="xxl">
            </Container>
          </Stack>
        </div>
      </Styles>
    </>
  );
};