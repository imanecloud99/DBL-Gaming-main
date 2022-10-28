import React from 'react';

import styled from 'styled-components';


import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Security () {
  return (
    <>
      <h1 className="titl">Security</h1>
      <Container fluid className='settingTitle'>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4" className="titleCard">Account</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12" >
                      <Form.Group>
                        <Card.Title style={{color: 'black'}}>Email</Card.Title>
                        <Card.Text className="textCard">
                          This email is linked to your account. You can verify your address in that field.
                        </Card.Text>
                        <Button className="btn-fill pull-right" variant="primary">Verify your Address mail</Button>
                      </Form.Group>
                    </Col>
                  </Row>

                </Form>
              </Card.Body>
            </Card>



            <Card style={{margin: '50px 0px 50px 0px'}}>
              <Card.Header>
                <Card.Title as="h4" className="titleCard">Security</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12" >
                      <Form.Group>
                        <Card.Title style={{color: 'black'}}>Password</Card.Title>
                        <Card.Text className="textCard">
                          Add an extra layer of security to your account by using your password and a code on your mobile phone to log in.
                        </Card.Text>
                        <Button className="btn-fill pull-right" variant="primary">Change your Password</Button>
                      </Form.Group>
                      <hr style={{margin: '5rem 0rem 2rem 0rem'}}/>

                      <Form.Group style={{}}>
                        <Card.Title style={{color: 'black'}}>Two-Factor Authentication</Card.Title>
                        <Card.Text className="textCard">
                          Add an extra layer of security to your account by using your password and a code on your mobile phone to log in.
                        </Card.Text>
                        <Button className="btn-fill pull-right" variant="primary">Set Up Two-Factor Authentication</Button>
                      </Form.Group>
                    </Col>
                  </Row>

                </Form>
              </Card.Body>
            </Card>



            <Card>
              <Card.Header>
                <Card.Title as="h4" className="titleCard">Privacy</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                      <Card.Title style={{color: 'black'}}>Option 1</Card.Title>
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Save
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default Security;