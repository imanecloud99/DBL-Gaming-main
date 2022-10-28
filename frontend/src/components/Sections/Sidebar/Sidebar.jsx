import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

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
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'

const StyledSideNav = styled.div`
  position: fixed; /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 75px; /* Set the width of the sidebar */
  z-index: 1; /* Stay on top of everything */
  top: 5.7em; /* Stay at the top */
  background-color: #1d1d1d; /* Black/ #040b14 */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 25px;
  @media screen and (max-width: 650px) {
    width: 50px;
    top: 5.4em;
  }
  @media screen and (max-width: 347px) {
    top: 3.8em;
  }
`

class SideNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path:
            '/settings/myprofile' /* path is used as id to check which NavItem is active basically */,
          name: 'My Profile',
          css: 'fa fa-user-o',
          key: 1 /* Key is required */,
        },
        {
          path: '/settings/security',
          name: 'Security',
          css: 'fa fa-shield',
          key: 2,
        },
        {
          path: '/usr/streams',
          name: 'My Streams',
          css: 'fas fa-broadcast-tower',
          key: 3,
        },
        {
          path: '/usr/tournaments',
          name: 'My Tournaments',
          css: 'fa fa-gamepad',
          key: 4,
        },
        {
          path: '/dashboard/home',
          name: 'My Channel',
          css: 'fa fa-video-camera',
          key: 5,
        },
        {
          path: '/usr/wallet',
          name: 'My Wallet',
          css: 'fa fa-money',
          key: 6,
        },
        {
          path: '/FAQ',
          name: 'FAQ',
          css: 'fa fa-question-circle',
          key: 7,
        },
        {
          path: '/auth',
          name: 'Log Out',
          css: 'fa fa-sign-out',
          key: 8,
        },
      ],
    }
  }

  onItemClick = (path) => {
    this.setState({ activePath: path })
  }

  render() {
    const { items, activePath } = this.state
    return (
      <StyledSideNav>
        {items.map((item, i) => {
          return (
            <OverlayTrigger
              key={i}
              style={{ color: 'blue' }}
              placement="right"
              overlay={<Tooltip id="tooltip-disabled">{item.name}</Tooltip>}
            >
              <span className="d-inline-block">
                <NavItem
                  path={item.path}
                  name={item.name}
                  css={item.css}
                  onItemClick={this.onItemClick}
                  active={item.path === activePath}
                  key={item.key}
                />
              </span>
            </OverlayTrigger>
          )
        })}
      </StyledSideNav>
    )
  }
}

const RouterSideNav = withRouter(SideNav)

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0; /* Puts space between NavItems */
  a {
    font-size: 2em;
    color: ${(props) => (props.active ? '#0000CD' : 'white')};
    :hover {
      opacity: 0.6;
      text-decoration: none; /* Gets rid of underlining of icons */
    }
    @media screen and (max-width: 650px) {
      font-size: 1.5em;
    }
  }
  @media screen and (max-width: 650px) {
    height: 50px;
    width: 50px;
  }
`

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props
    onItemClick(path)
  }

  render() {
    const { active } = this.props
    return (
      <StyledNavItem active={active}>
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          <NavIcon></NavIcon>
        </Link>
      </StyledNavItem>
    )
  }
}

const NavIcon = styled.div``

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>
  }
}
