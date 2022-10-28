import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import Select from 'react-select'
import Navbar from '../Navbars/Navbar'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { withRouter } from 'react-router'

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
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'

import img04 from '../../images/img04.jpg'
import add from '../../images/add.png'
import Selector from '../Selector/Selector'

import Channels from '../Sections/Channels/Channels'
import img1 from '../../images/img1.jpg'

import channels from '../../data/Channelsdata'

import './FriendsPage.css'

const FriendsPage = () => {
  const [state] = React.useState({
    heading: 'Friends',
  })

  const [page, setPage] = useState(1)

  const info = channels.channels
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <h1 className="titl">{state.heading}</h1>
        <div className="exploreNav">
          <Nav defaultActiveKey="matchsLive" as="ul">
            <Nav.Item as="li">
              <Nav.Link eventKey="friends" onClick={() => setPage(1)}>
                Your Friends
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="friends/requests" onClick={() => setPage(2)}>
                Friend Requests
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {page === 1 ? (
          <>
            <div className="noFriends">
              <p>You don't have any friends yet. :(</p>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
                style={{ marginTop: '30px' }}
              >
                + Add Friends Here
              </button>
            </div>

            <div className="collapse" id="collapseExample">
              <hr
                style={{
                  marginBottom: '50px',
                  borderTop: '2px solid rgba(255,255,255,.8)',
                }}
              ></hr>
              <Selector />

              <div>
                <div
                  className="channels__container"
                  style={{ paddingBottom: '60px' }}
                >
                  {/* channel */}
                  {info.map((channels, i) => (
                    <div
                      key={i}
                      className="channel"
                      style={{ marginBottom: '170px' }}
                    >
                      <div className="channel__thumbnail">
                        <a href="../../userChannel.jsx">
                          <img src={channels.photo} alt="" />
                        </a>
                      </div>
                      <div className="channel__details">
                        <div className="titleChan">
                          <a href="../../userChannel.jsx">
                            <h3>{channels.name}</h3>
                          </a>
                          <span className="span">
                            {channels.followers} followers
                          </span>
                        </div>
                      </div>
                      <Button>Add to your Friends</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : page === 2 ? (
          <>
            <div className="noFriends">
              <p>You have no friend requests!</p>
            </div>

            {/* <div>
                            <Selector/>
                        </div> */}
          </>
        ) : (
          setPage(1)
        )}
      </div>
    </>
  )
}

export default FriendsPage
