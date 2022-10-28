import React from 'react'

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
  Modal,
  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

import { useState } from 'react'

import img04 from '../../../images/img04.jpg'
import add from '../../../images/add.png'

function UserTournaments() {
  const [show, setShow] = useState(false)
  const [nextShow, setNextShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleNextShow = () => setNextShow(true)

  return (
    <>
      <h1 className="titl">Tournaments</h1>
      <Container fluid className="settingTitle">
        <Row>
          <Col md="12">
            <Card>
              <Card.Header className="head">
                <Card.Title as="h4" className="titleCard">
                  My Tournaments
                </Card.Title>
                <p className="card-category">
                  Discover the latest <a href="">DBL-Gaming Tournaments</a>
                </p>
                <div>
                  <a href="" style={{ textDecoration: 'none' }}>
                    <i
                      className="fa fa-th-large fa-lg"
                      aria-hidden="true"
                      style={{ marginRight: '15px' }}
                    ></i>
                  </a>

                  <a href="" style={{ textDecoration: 'none' }}>
                    <i
                      className="fa fa-th-list fa-lg"
                      aria-hidden="true"
                      style={{ marginRight: '15px' }}
                    ></i>
                  </a>

                  <Button
                    className="btn-fill pull-right"
                    variant="primary"
                    style={{ marginRight: '15px' }}
                  >
                    <i className="fa fa-archive" aria-hidden="true"></i>Archive
                  </Button>
                  <Button
                    className="btn-fill pull-right"
                    variant="primary"
                    style={{ marginRight: '15px' }}
                    onClick={handleShow}
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>New
                  </Button>
                </div>
              </Card.Header>

              <Card.Body className="all-icons">
                <Row xs={1} md={2} className="g-4">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <Col key={idx}>
                      <Card className="font-icon-list">
                        <Card.Img src={img04} />
                        <Card.Body>
                          <Card.Title className="titleCard">
                            Card title
                          </Card.Title>
                          <Card.Text
                            className="textCard"
                            style={{ marginTop: '0px' }}
                          >
                            This is a longer card with supporting text below as
                            a natural...
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <div style={{ display: 'flex' }}>
                            <small
                              className="text-muted"
                              style={{ fontSize: '10px', whiteSpace: 'normal' }}
                            >
                              Last accessed time 3 mins ago
                            </small>

                            <div className="server">
                              <a href="" style={{ marginRight: '5px' }}>
                                <img
                                  src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
                                  width="25"
                                  alt="discord"
                                />
                              </a>
                              <a href="" style={{ marginRight: '5px' }}>
                                <img
                                  src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png"
                                  width="25"
                                  alt="discord"
                                />
                              </a>
                            </div>
                          </div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                  <Col>
                    <Card className="font-icon-list" onClick={handleShow}>
                      <Card.Img
                        src={add}
                        style={{
                          width: '25%',
                          alignSelf: 'center',
                          marginTop: '10%',
                        }}
                      />
                      <Card.Body>
                        <Card.Title
                          className="titleCard"
                          style={{ marginTop: '15px', textAlign: 'center' }}
                        >
                          Create a New Tournament
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        style={{ color: 'black', width: '100%' }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a New Tournament</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="pr-1" md="6">
              <Form.Group>
                <label>Tournament Name</label>
                {/* !! Name Personnalisé !! */}
                <Form.Control
                  placeholder="Tournament Name"
                  type="text"
                  required
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <InputGroup className="mb-3" style={{ display: 'block' }}>
            <label>Discipline</label>
            <div style={{ display: 'flex' }}>
              <FormControl
                placeholder="Select Discipline"
                aria-label="Discipline"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text>
                <i className="fa fa-search"></i>
              </InputGroup.Text>
            </div>
          </InputGroup>

          <InputGroup className="mb-3" style={{ display: 'block' }}>
            <label>Timezone</label>
            <div style={{ display: 'flex' }}>
              <DropdownButton
                id="dropdown-basic-button"
                title="Choose a Timezone"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleNextShow}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserTournaments;
