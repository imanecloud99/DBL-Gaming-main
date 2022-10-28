import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import { Button, Modal } from 'react-bootstrap';
import FormControle from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import {
  Badge,

  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,

  FormControl,
  InputGroup,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

const drawerWidth = 390;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },



  input: {
    background: 'white',
    borderRadius: 3,
    padding: 4,
    // paddingLeft: 12,
    // marginBottom: 15,
    // marginLeft: 10,
    marginRight: 10,
  },
}));




function UserStream() {

  const [enter, setEnter] = React.useState('');
  const handleChange = (event) => {
      setEnter(event.target.value);
  };

  const [show, setShow] = useState(false)
  const [nextShow, setNextShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      > */}
        {/* <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Persistent drawer
          </Typography> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
            style={{position: 'fixed',
                    right: '0',
                    marginRight: '50px',
                    marginTop: '12px',
            }}
            size="large"
          >
            <MenuIcon />
          </IconButton>
        {/* </Toolbar> */}
      {/* </AppBar> */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        style={{alignItems:'center', justifyContent:'center', float:'center', textAlign:'center', position:'absolute'}}
      >

        <Button
            className="btn-fill pull-center"
            variant="info"
            style={{fontSize:'30px', padding:'10px 10px',alignItems:'center', justifyContent:'center', textAlign:'center'}}
            onClick={handleShow}
        >Go Live</Button>

      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <h5 style={{alignItems:'center', justifyContent:'center', textAlign:'center'}}>My Chat</h5>

        <Divider />
        {/* <footer> */}
          <div style={{display:'flex', 
                      alignItems:'center', 
                      alignSelf:'center', 
                      position:'absolute', 
                      bottom:'0', 
                      marginBottom:'20px',
          }}>
          <TextField
            id="outlined"
            label="Message"
            variant="outlined"
            size='small'
            multiline
            maxRows={3}
            className={classes.input}
          />
          <Button
              className="btn-fill pull-right"
              variant="info"
              style={{ marginRight:'14px'}}
          ><i class="far fa-paper-plane" style={{marginRight:'4px'}}></i>Send</Button>
          </div>
        {/* </footer> */}
      </Drawer>


      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        style={{ color: 'black', width: '100%' }}
      >
        <Modal.Header closeButton>
            <Modal.Title>Stream Info</Modal.Title>
        </Modal.Header>
        <Card>
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
                                      <option >Music</option>
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
                      // onClick={handleShow}
                  >Save</Button>

              </Form>
          </Card.Body>
      </Card>
      </Modal>
    </div>
  );
}


export default UserStream;