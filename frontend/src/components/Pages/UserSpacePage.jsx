import React from 'react'
import './UserSpacePage.css'
import Sidebar from '../Sections/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from '../Sections/UserSpace/Profile'
import userTournaments from '../Sections/UserSpace/userTournaments'
import Security from '../Sections/UserSpace/Security'
import Streams from '../Sections/UserSpace/Streams'
import FAQ from '../Details/FAQ'
import Navbar from '../Navbars/Navbar'

function UserSpacePage() {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/settings/myprofile" exact component={Profile} />
        <Route path="/settings/security" component={Security} />
        <Route path="/usr/streams" component={Streams} />
        <Route path="/usr/tournaments" component={userTournaments} />
        <Route path="/FAQ" exact component={FAQ} />
      </Switch>
      {/* </Router> */}
    </>
  )
}

export default UserSpacePage
