import React from 'react';

import './ExplorePage.css'
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import {useState} from 'react';
import Select from 'react-select';
import Navbar from '../Navbars/Navbar';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';



import {
  Badge,
  Button,
  Card,
  Form,
 
  Nav,
  Container,
  Row,
  Col,
  Modal,
  FormControl,
  InputGroup,
  Dropdown, DropdownButton,
} from "react-bootstrap";

import img04 from '../../images/img04.jpg'
import add from '../../images/add.png'
import Selector from '../Selector/Selector';
import Events from '../Events/Events';
import LiveMatches from '../Sections/LiveItem/LiveMatches';
import Footer from '../Sections/Footer/Footer'


function CategoriesPage (props) {
  const [state] = React.useState({
    heading: 'DBL-Gaming Categories',
  })

  const location = useLocation()

  const [page, setPage] = useState(1);

  return (
    <>
      <Navbar />
      <div className="Catg_header">
        <div className="header__content">
          <h1 className="header__content-h1">{state.heading}</h1>
          <div className="header__content-links">
          </div>
        </div>
      </div>

      <div>
        <div className="exploreNav">
          <Nav activeKey={location.pathname} as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/categories/music"><center>Music</center></Nav.Link>
            </Nav.Item>
          </Nav>
        </div>


        {location.pathname.endsWith('/music') ? (
          <>
        
          <Selector/>

          <div>
            <LiveMatches />
          </div>

        </>

        ) : null}
      </div>

      <Footer/>

    </>
  )
}

export default CategoriesPage;
