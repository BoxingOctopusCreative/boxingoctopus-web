import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID     = process.env.REACT_APP_EMAILJS_USER_ID;

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
  .then((result) => {
    console.log(result.text);
    Swal.fire({
    icon: "success",
    title: "Message Sent Successfully"
    })
  }, (error) => {
    console.log(error.text);
    Swal.fire({
    icon: "error",
    title: "Oops, something went wrong",
    text: error.text,
    })
  });
  e.target.reset()
};

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
              <div className='text-splash' style={{ marginBottom: "50px" }}>Contact</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              If you have any questions, comments, or concerns, please feel free to reach out to me on social media.
              <br />
              <img 
                src="https://assets.boxingoctop.us/icons/icon_twitter.png"
                alt="Boxing Octopus Creative on Twitter"
                width="5%"
                style={{ marginRight: "20px" }}
              />
              <img 
                src="https://assets.boxingoctop.us/icons/icon_facebook.png" 
                alt="Boxing Octopus Creative on Twitter" 
                width="5%" 
                style={{ marginRight: "20px" }}
              />
              <br />
              <br />
              Additionally, feel free to contact me via email through the form on this page.
            </p>
          </Col>
          <Col>
            <Form onSubmit={handleOnSubmit}>
              <Col>
                <Form.Group className="mb-3" controlId="form-input-control-email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="from_email" 
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-input-control-first-name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Your Name" 
                    name="from_name" 
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="form-input-control-message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={6} name="message" />
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
};