import React from 'react';

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
import { Link } from 'react-router-dom';

const StreamSettings = () => {
    return (
        <div>
            <h1 className="titl">Streaming Settings</h1>
            <Container fluid className='settingTitle'>
                <Row>
                <Col md="12">
                    {/* <Card>
                    <Card.Header>
                        <Card.Title as="h4" className="titleCard">Stream Key & Preferences</Card.Title>
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
                    </Card> */}



                    <Card style={{margin: '50px 0px 50px 0px'}}>
                    <Card.Header>
                        <Card.Title as="h4" className="titleCard">Stream Key & Preferences</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                        <Row>
                            <Col md="12" >
                            <Form.Group>
                                <Card.Title style={{color: 'black'}}>Primary Stream key</Card.Title>
                                <Card.Text className="textCard">
                                Add an extra layer of security to your account by using your password and a code on your mobile phone to log in.
                                </Card.Text>
                                
                                <Button className="btn-fill pull-right" variant="primary">RESET</Button>
                                <Button className="btn-fill pull-right" variant="primary" style={{marginRight:'15px'}}>COPY</Button>
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
                        <Card.Title as="h4" className="titleCard">Permissions</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                        <Row>
                            <Col md="12">
                            <Form.Group>
                                <Link to="">
                                    <p>Channels you can manage as an editor</p>
                                    <p>See and manage what channels you have the editor role in</p>
                                </Link>
                                
                            </Form.Group>

                            <hr style={{margin: '5rem 0rem 2rem 0rem'}}/>

                            <Form.Group>
                                <Link to="">
                                    <p>Channels you can manage as an editor</p>
                                    <p>See and manage what channels you have the editor role in</p>
                                </Link>
                                
                            </Form.Group>
                            </Col>
                        </Row>
                        </Form>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StreamSettings
