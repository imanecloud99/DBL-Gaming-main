import React, { useEffect } from 'react'
import './GameDetails.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

import LiveMatches from '../Sections/LiveItem/LiveMatches'
import Navbar from '../Navbars/Navbar'

function GameDetails() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-md-4">
          <div className="game-poster">
            <img
              className="poster-img"
              src={
                'http://images.igdb.com/igdb/image/upload/t_1080p/co2exg.jpg'
              }
            ></img>
          </div>
        </div>
        <div className="col-md-8">
          <div className="game-details-container">
            <div className="m-d-tiltle">Runestone Keeper</div>
            <div className="m-d-release">2020-09-26</div>
            <div className="m-d-desc">
              Runestone Keeper is a roguelike dungeon crawler that blends
              classic RPG elements and turn based strategy. Heroes, monsters,
              equipment, events, magic and skills, traps and devices, shrines
              and altars, Goddesses and merchants. Choose your weapon and begin
              an epic adventure!
            </div>
            <div className="row" style={{ paddingTop: '20px' }}>
              <div className="col-md-4">
                <div className="m-d-total-votes">793</div>
              </div>
              <div className="col-md-4">
                <div className="m-d-popularity">285.942</div>
              </div>
              <div className="col-md-4">
                <div className="m-d-vote-avg">8.3</div>
              </div>
              <div className="col-md-4 text-align-center">
                <ThumbsUpDownIcon style={{ fontSize: 50, color: 'white' }} />
              </div>
              <div className="col-md-4 text-align-center">
                <FavoriteIcon style={{ fontSize: 50, color: 'white' }} />
              </div>
              <div className="col-md-4 text-align-center">
                <ThumbUpAltIcon style={{ fontSize: 50, color: 'white' }} />
              </div>
              <div className="col-md-4 text-align-center">
                <div className="m-d-total-votes-title">Total Votes</div>
              </div>
              <div className="col-md-4 text-align-center">
                <div className="m-d-popularity-title">Popularity</div>
              </div>
              <div className="col-md-4 text-align-center">
                <div className="m-d-vote-avg-title">Average Vote</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <hr
          style={{
            marginBottom: '50px',
            borderTop: '2px solid rgba(255,255,255,.8)',
          }}
        ></hr>
        <div
          style={{
            color: 'white',
            fontSize: '30px',
            fontWeight: '400',
            padding: '50px',
            paddingLeft: '80px',
          }}
        >
          Lives related to the game above
        </div>
        <LiveMatches />
      </div>
    </>
  )
}

export default GameDetails
