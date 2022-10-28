import React from 'react'
import './App.css'

// components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/Pages/HomePage'
import About from './components/Details/About'
import FAQ from './components/Details/FAQ'

import ExplorePage from './components/Pages/ExplorePage'
import GameDetails from './components/Cards/GameDetails'

import Auth from './components/Sections/Auth/Auth'
import ForgotPW from './components/Sections/Auth/ForgotPW'
import UserSpacePage from './components/Pages/UserSpacePage'

import UserStream from './components/UserStream'
import DashboardPage from './components/Pages/DashboardPage'
import CategoriesPage from './components/Pages/CategoriesPage'
import FriendsPage from './components/Pages/FriendsPage'
import StreamingPage from './components/Pages/StreamingPage'

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" exact component={About} />
        <Route path="/FAQ" exact component={FAQ} />

        <Route
          path={['/explore/livematchs', '/explore/games', '/explore/events']}
          exact
          component={ExplorePage}
        />

        <Route
          path={[
            '/username',
            '/username/about',
            '/username/schedule',
            '/username/videos',
            '/username/golive',
          ]}
          exact
          component={StreamingPage}
        />

        <Route
          path={[
            '/categories/music',
            '/categories/science',
            '/categories/sponsored',
          ]}
          exact
          component={CategoriesPage}
        />

        <Route path="/explore/games/:id" exact component={GameDetails} />
        <Route path="/forgotpw" exact component={ForgotPW} />
        <Route path="/auth" exact component={Auth} />

        <Route
          path={[
            '/settings/myprofile',
            '/settings/security',
            '/usr/streams',
            '/usr/tournaments',
            '/FAQ',
          ]}
          exact
          component={UserSpacePage}
        />

        <Route path="/user/stream" exact component={UserStream} />
        <Route
          path={[
            '/dashboard/home',
            '/dashboard/streamingtools',
            '/dashboard/streamanager',
            '/friends',
            '/dashboard/followers',
            '/dashboard/settings/stream',
            '/dashboard/settings/channel',
          ]}
          exact
          component={DashboardPage}
        />


        <Route path="/friends" exact component={FriendsPage} />
      </Switch>

      {/* <Footer /> */}
    </Router>
  )
}

export default App
