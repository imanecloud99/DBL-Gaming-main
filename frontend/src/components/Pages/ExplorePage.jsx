import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import { getGame, getGames } from '../../actions/games'

import './ExplorePage.css'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { withRouter } from 'react-router'

import Footer from '../Sections/Footer/Footer'

import events from '../../data/Cardsdata'
import CardItem2 from '../Cards/CardItem2'

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

import Navbar from '../Navbars/Navbar'
import img04 from '../../images/img04.jpg'
import add from '../../images/add.png'
import Selector from '../Selector/Selector'
import Events from '../Events/Events'
import LiveMatches from '../Sections/LiveItem/LiveMatches'
import CardItem from '../Cards/CardItem'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const ExplorePage = () => {
  const info = events.events

  const { games: data } = useSelector((state) => state.games)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const query = useQuery()

  const searchQuery = query.get('searchQuery') || ''

  const [search, setSearch] = useState('')
  const [state] = useState({
    heading: 'DBL-Gaming Explore',
    element1: 'Live Matches',
    element2: 'Games',
    element3: 'Tops Events',
  })

  const gameDetails = async (id) => {
    await history.push(`/explore/games/${id}`)
    dispatch(getGame(id))
  }

  const searchGames = () => {
    dispatch(getGames(search))
    history.push(`/explore/games?searchQuery=${search}`)
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchGames()
    }
  }

  useEffect(() => {
    dispatch(getGames(searchQuery))
  }, [searchQuery, dispatch])

  return (
    <>
      <Navbar />
      <div className="Exp_header">
        <div className="header__content">
          <h1 className="header__content-h1" style={{ fontSize: '60px' }}>
            {state.heading}
          </h1>
          <div className="header__content-links">
            <div>{state.element1}</div>
            <span className="header__content-span"></span>
            <div>{state.element2}</div>
            <span className="header__content-span"></span>
            <div>{state.element3}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="exploreNav">
          <Nav activeKey={location.pathname} as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/explore/livematchs">Live Matchs</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/explore/games">Games</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/explore/events">Events</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {location.pathname.endsWith('/livematchs') ? (
          <>
            <Selector />

            <div>
              <LiveMatches />
            </div>
          </>
        ) : location.pathname.endsWith('/games') ? (
          data && (
            <div>
              <Selector
                handleKeyPress={handleKeyPress}
                search={search}
                setSearch={setSearch}
              />
              <div className="row">
                <div className="card__container">
                  {Object.values(data)[0].map((game) => (
                    <CardItem
                      key={game.id}
                      id={game.id}
                      image={`${game.cover.url}`.replace('thumb', '1080p')}
                      gameDetails={gameDetails}
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        ) : location.pathname.endsWith('/events') ? (
          <>
            <div>
              <Selector />
              <div className="row">
                {/* <CardItem/> */}
                {/* <Events /> */}
                <div className="row" style={{ justifyContent: 'center' }}>
                  <div className="card__container">
                    {info.map((events, i) => (
                      <CardItem2
                        key={i}
                        image={events.picture}
                        title={events.title}
                        description={events.description}
                        viewers={events.viewers}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>

      <Footer />
    </>
  )
}

export default ExplorePage
