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
    Modal,
    FormControl,
    InputGroup,
    Dropdown,
    DropdownButton,
  } from 'react-bootstrap';

  import CardGroup from 'react-bootstrap/CardGroup'
  
import { useState } from 'react';

import tools from "../../../data/Toolsdata"

import img04 from '../../../images/img04.jpg'
import add from '../../../images/add.png'
import { Link } from 'react-router-dom';

const StreamTools = () => {

    const [show, setShow] = useState(false)
    const [nextShow, setNextShow] = useState(false)
  
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const info = tools.tools

    return (
        <div>
            <h1 className="titl">Streaming Tools</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://static.twitchcdn.net/assets/obs_logors_1x-52d53b14faec28b76e16.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://static.twitchcdn.net/assets/twitch_studio_beta-7d26e74efeebe55fd27c.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://static.twitchcdn.net/assets/streamlabs_app_icon-eb8c7c7e752bdd6eeda5.png" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                </CardGroup>
        </div>
    )
}

export default StreamTools;
