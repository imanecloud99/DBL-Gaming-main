import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../images/logo.png'

import * as actionType from '../../constants/actionTypes'

function Navbar() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('profile')),
  )

  const logout = () => {
    dispatch({ type: actionType.LOGOUT })
    history.push('/auth')
    setUserInfo(null)
  }

  const location = useLocation()

  useEffect(() => {
    const token = userInfo?.token

    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUserInfo(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link to="/" className="navbar-brand p-0">
          <img src={logo} width="95" height="70" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle text-truncate"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Explore
                </Link>
                <div
                  className="dropdown-menu fade-down"
                  aria-labelledby="navbarDropdown"
                >
                  <Link to="/explore/livematchs" className="dropdown-item">
                    Live Matches
                  </Link>
                  <Link to="/explore/games" className="dropdown-item">
                    Games
                  </Link>
                  <Link to="/explore/events" className="dropdown-item">
                    Events
                  </Link>
                </div>
              </li>
            

            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-truncate"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categories
              </Link>
              <div
                className="dropdown-menu fade-down"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/categories/music" className="dropdown-item">
                  Music
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-truncate"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </Link>
              <div
                className="dropdown-menu fade-down"
                aria-labelledby="navbarDropdown"
              >
                <Link to="/About" className="dropdown-item">
                  About
                </Link>
                <Link to="/FAQ" className="dropdown-item">
                  FAQ
                </Link>
              </div>
            </li>
          </ul>
          <div className="search-box ml-auto col-lg-3 p-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
              />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          {userInfo?.user && (
            <>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  style={{ marginLeft: '15px' }}
                >
                  <i className="fa fa-bell-o fa-lg" aria-hidden="true"></i>
                </Link>
              </div>
            </>
          )}

          {location.pathname === '/store' && (
            <>
              <div className="nav-item dropdown">
                <Link
                  to="/store/checkout"
                  className="nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  style={{ marginLeft: '-15px' }}
                >
                  <i class="fa fa-shopping-basket fa-lg" aria-hidden="true"></i>
                </Link>
              </div>
            </>
          )}
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
            >
              {userInfo?.user ? (
                <i className="fa fa-3x userprofile" aria-hidden="true">
                  {userInfo.user.name.charAt(0)}
                </i>
              ) : (
                <i className="fa fa-user-circle fa-3x" aria-hidden="true"></i>
              )}
            </Link>
            <div
              className="dropdown-menu fade-down"
              aria-labelledby="navbarDropdown"
            >
              {userInfo?.user ? (
                <>
                  <Link to="/username" className="dropdown-item">
                    <i className="fa fa-video-camera" aria-hidden="true"></i>My
                    Channel
                  </Link>
                  <Link to="/friends" className="dropdown-item">
                    <i className="fa fa-users" aria-hidden="true"></i>Friends
                  </Link>
                  <hr className="line" />
                  <Link to="/dashboard/home" className="dropdown-item">
                    <i class="fas fa-columns" aria-hidden="true"></i>Dashboard
                  </Link>
                  <Link to="/settings/myprofile" className="dropdown-item">
                    <i className="fa fa-wrench" aria-hidden="true"></i>Settings
                  </Link>
                  <hr className="line" />
                  <div
                    className="dropdown-item"
                    onClick={logout}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="fa fa-sign-out" aria-hidden="true"></i>Log out
                  </div>
                </>
              ) : (
                <Link to="/auth" className="dropdown-item">
                  <i className="fa fa-sign-in" aria-hidden="true"></i>Log in
                </Link>
              )}
              <Link to="/language" className="dropdown-item">
                <i className="fa fa-language"></i> Language
              </Link>
              <Link to="/dark" className="dropdown-item">
                <i className="fa fa-adjust"></i>Theme
                {/* <Switch size="50px" /> */}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
