import React from 'react'
import styled from 'styled-components'

// react-bootstrap components
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
} from 'react-bootstrap'

import img29 from '../../../images/img29.jpg'
import img37 from '../../../images/img37.png'

const fluid = styled.div``

function Profile() {
  return (
    <>
      <h1 className="titl">My Profile</h1>
      <Container fluid className="settingTitle">
        <Row>
          <Col md="8" style={{ marginBottom: '30px' }}>
            <Card>
              <Card.Header>
                <Card.Title as="h4" style={{ color: 'rgb(0,0,0)' }}>
                  Edit Profile
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Username</label>
                        <Form.Control
                          defaultValue="user123"
                          placeholder="Username"
                          type="text"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="8">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          defaultValue="User"
                          placeholder="First Name"
                          type="text"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          // defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                          //defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>City</label>
                        <Form.Control
                          //defaultValue="City"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Country</label>
                        <Form.Control
                          defaultValue="Morocco"
                          placeholder="Country"
                          type="text"
                          required
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Postal Code</label>
                        <Form.Control
                          placeholder="Postal Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>About Me</label>
                        <Form.Control
                          cols="80"
                          // defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                          // that two seat Lambo."
                          placeholder="Here can be your description"
                          rows="4"
                          as="textarea"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Update Profile
                  </Button>
                  <a className="btn btn-danger" href="#">
                    <i className="fa fa-trash-o fa-lg"></i> Delete Account
                  </a>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img alt="..." src={img29}></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={img37}
                    ></img>
                    <h5 className="titre">User Name</h5>
                  </a>
                  <p className="description">Username</p>
                </div>
                <p className="description text-center">
                  "Here <br></br>
                  You can <br></br>
                  Write your description"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href=""
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <img
                    src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg"
                    alt=""
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  ></img>
                </Button>

                <Button
                  className="btn-simple btn-icon"
                  href=""
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    alt=""
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  ></img>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile
