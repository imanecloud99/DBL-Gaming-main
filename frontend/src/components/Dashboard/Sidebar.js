import React from 'react'

import { Link, useHistory, useLocation } from 'react-router-dom'

import logo from '../../images/logo.png'

import './Sidebar.css'
import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

const Sidebar = () => {
  const history = useHistory()
  const location = useLocation()

  return (
    <div id="sidebar" className="">
      <header>
        <div className="sidebar__logo">
          <Link to="/" className="">
            <img src={logo} width="95" height="70" alt="logo" />
          </Link>
          <h3>Dashboard</h3>
        </div>
      </header>

      <div>
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId)
          }}
          items={[
            {
              title: 'Home',
              itemId: '/dashboard/home',
              elemBefore: () => <i class="fas fa-home"></i>,
            },
      
            {
              title: 'Community',
              itemId: '/dashboard/community',
              elemBefore: () => <i class="fas fa-users"></i>,
              subNav: [
                {
                  title: 'Friends',
                  itemId: '/friends',
                },
                {
                  title: 'Followers List',
                  itemId: '/dashboard/followers',
                },
              ],
            },
    
            {
              title: 'Settings',
              itemId: '/dashboard/settings',
              elemBefore: () => <i class="fas fa-cog"></i>,
              subNav: [
                {
                  title: 'Stream',
                  itemId: '/dashboard/settings/stream',
                },
                {
                  title: 'Channel',
                  itemId: '/dashboard/settings/channel',
                },
              ],
            },
            {
              title: 'Streaming Tools',
              itemId: '/dashboard/streamingtools',
              elemBefore: () => <i class="fas fa-video"></i>,
            },
          ]}
        />
      </div>

      <footer className="sidebar_bottom">
        <div>
          <hr style={{ borderTop: '1px solid rgba(255,255,255,0.8)' }} />
          <div
            style={{
              padding: '8px 20px',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              textAlign: 'center',
              // background: '#081629',
            }}
          >
            <p style={{ color: '#999', marginBottom: '0' }}>
              Copyright <span>&copy;</span> 2022,{' '}
              <a
                href="/"
                style={{
                  color: 'white',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                DBL<span style={{ color: 'purple' }}>G</span>aming
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Sidebar
