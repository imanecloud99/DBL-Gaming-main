import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';
import FormControle from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';



import './Profil.css'
import RecentItems from './RecentItems';

const Profil = () => {

    const [enter, setEnter] = React.useState('');
    const handleChange = (event) => {
        setEnter(event.target.value);
    };

    const [show, setShow] = useState(false)
    const [nextShow, setNextShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    const useStyles = makeStyles((theme) => ({
        input: {
          background: 'white',
          borderRadius: 3,
          padding: 4,
          paddingLeft: 12,
          marginBottom: 15,
          marginLeft: 10,
          marginRight: 10,
        },

      }));

    const classes = useStyles();


    const location = useLocation()
    return (
        <div className="profile">
            <div style={{display:'flex'}}>
                <div className="profile__topLeft">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj" alt="" />
                    <div className="profile__topLeftDetails">
                        <h4>cleverprogrammer</h4>
                        <h6>828k followers</h6>
                        <Badge pill bg='danger' style={{background:'red'}}>Live</Badge>
                    </div>
                </div>

                <div className="profile__topRight">
                    <i className="fas fa-heart graybg fa-xs"></i>
                    <i className="fas fa-bell graybg fa-xs"></i>
                    <i className="fas fa-ellipsis-v fa-xs"></i>
                </div>
            </div>
            <div className="profile__menu">

                <Nav activeKey={location.pathname} as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/username"><h5 className="active">Home</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/username/about"><h5>About</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/username/schedule"><h5>Schedule</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/username/videos"><h5>Videos</h5></Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/username/golive"><h5><i className="fas fa-arrow-up"></i> Go Live </h5></Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </div>

            {location.pathname.endsWith('/username') ? (
            <div className="profile__recent">
                <h2>Recent broadcasts</h2>
                <div className="profile__recentItems row">
                    <RecentItems
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)'}
                    />
                    <RecentItems
                        url={'https://youtube.com/embed/f3EbDbm8XqY'}
                        title={'Top 5 Programming Languages to Learn in 2018 to Get a Job Without a College Degree'}
                    />
                    <RecentItems
                        url={'https://www.youtube.com/embed/wp15jyylSEQ'}
                        title={'Learn Python Programming - 1 - How to Download and Install Python in 2 Minutes'}
                    />
                    <RecentItems
                        url={'https://youtube.com/embed/olQCJqdzBdk'}
                        title={'Build a Professional Landing Page worth $10k with HTML, CSS & JavaScript'}
                    />
                    <RecentItems
                        url={'https://www.youtube.com/embed/ktjafK4SgWM'}
                        title={'Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)'}
                    />
                </div>

                <div className="profile__categories">
                    <h2>cleverprogrammer's recently streamed Categories</h2>
                    <div className="profile__categoriesItem">
                        <img src="https://s3.amazonaws.com/thumbnails.illustrationsource.com/huge.96.480722.JPG" alt="" />
                        <h4>Science & Technology</h4>
                    </div>
                    
                </div>
            </div>
            ) : location.pathname.endsWith('/about') ? (
                <>
                
                </>

            ) : location.pathname.endsWith('/schedule') ? (
                <>
                
                </>

            ) : location.pathname.endsWith('/videos') ? (
                <>
                
                </>

            ) : location.pathname.endsWith('/golive') ? (
                <>
                    <Container fluid className='settingTitle goLiveCard'>
                        <Row>
                            <Col md="8" className='' style={{marginLeft:'160px'}}>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h4" className="titleCard">Stream Info</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col className="" md="12">
                                                    <div className="" md="12" style={{ display: 'grid' }}>   
                                                        <label htmlFor="">Stream Title</label>
                                                        <TextField
                                                        id="standard-helperText"
                                                        placeholder="Title"
                                                        
                                                        multiline
                                                        maxRows={2}
                                                        className={classes.input}
                                                        />
                                                    </div> 

                                                    <div className="" md="12" style={{ display: 'grid' }}>
                                                        <label htmlFor="">Language</label>

                                                        <FormControle required>
                                                            <NativeSelect
                                                            className={classes.input}
                                                            id="demo-customized-select-native"
                                                            onChange={handleChange}
                                                            >
                                                                <option  default>English</option>
                                                                <option >French </option>
                                                                <option >Arabic</option>
                                                                <option >Spanish</option>
                                                            </NativeSelect>
                                                        </FormControle>

                                                    </div>

                                                    <div className="" style={{ display: 'grid' }}>
                                                        <label htmlFor="">Category</label>

                                                        <FormControle required>
                                                            <NativeSelect
                                                            className={classes.input}
                                                            id="demo-customized-select-native"
                                                            onChange={handleChange}
                                                            required
                                                            >
                                                                <option >Esports</option>
                                                                <option >IRL</option>
                                                                <option >Music</option>
                                                                <option >Science & Technology </option>
                                                            </NativeSelect>
                                                        </FormControle>

                                                    </div>
                                                
                                                    <div className="" style={{ display: 'grid' }}>
                                                        <label htmlFor="">Tags</label>
                                                        <TextField
                                                        id="standard-helperText"
                                                        placeholder="Tags"
                                                        className={classes.input}
                                                        />
                                                    </div>


                                                </Col>
                                            </Row>

                                            <Button
                                                className="btn-fill pull-right"
                                                variant="info"
                                                style={{marginTop:'20px'}}
                                                onClick={handleShow}
                                            >Save</Button>

                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>


                    <Modal
                        size="md"
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        centered
                        style={{ color: 'black', width: '100%' }}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Encoding Server Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col className="pr-1" md="12">
                                    <div>
                                        <p>Please make sure that you have set Keyframe=2 in your broadcasting software.<a href="">Learn More</a></p>
                                        <p>Please enter your encode information into your broadcasting software before pro-ceeding to the next step</p>
                                    </div>
                                    <Form.Group>
                                        <label style={{fontWeight:'bold'}}>Stream URL</label>
                                        <div style={{display:"flex"}}>
                                            <Form.Control
                                            type="url"
                                            required
                                            ></Form.Control>
                                            <Button className="btn-fill" variant="primary" style={{fontSize:'12px', marginLeft:'3px'}}>
                                                COPY
                                            </Button>
                                        </div>
                                    </Form.Group>

                                    <Form.Group>
                                        <label style={{fontWeight:'bold'}}>Stream Key</label>
                                        <div style={{display:"flex"}}>
                                            <Form.Control
                                            type="password"
                                            required
                                            ></Form.Control>
                                            <Button className="btn-fill" variant="primary" style={{fontSize:'12px', marginLeft:'3px'}}>
                                                COPY
                                            </Button>
                                        </div>
                                    </Form.Group>

                                    <Button variant="outlined" size="small">Regenerate Server URL</Button>

                                </Col>
                            </Row>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button className="btn-fill pull-right" variant="primary" onClick={handleClose}>
                                OK
                            </Button>
                            </Modal.Footer>
                    </Modal>

                </>

            ) : null}
        </div>
    )
}

export default Profil
