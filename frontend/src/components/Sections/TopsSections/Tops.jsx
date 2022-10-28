import React from 'react'
import { Link } from 'react-router-dom'
import { SliderData } from '../Lives/SliderData';

import events from '../../../data/Cardsdata'

import img04 from '../../../images/img04.jpg'
import img12 from '../../../images/img12.jpg'
import img13 from '../../../images/img13.jpg'
import img14 from '../../../images/img14.png'
import img15 from '../../../images/img15.jpg'
import img16 from '../../../images/img16.jpg'
import img18 from '../../../images/img18.jpg'
import img19 from '../../../images/img19.jpg'

import './Tops.css'
import TeamsGrid from '../Teams/TeamsGrid';
import Slider from '../Lives/Slider'
import CardItem2 from '../../Cards/CardItem2'

function Tops() {

  const info = events.events

  return (
    <div>
      <div className="section-container">
        {/* <div className="title"><Link to="/explore/livematches">Live Matches</Link></div> */}
        <Slider slides={SliderData} props={'Matches'} />
        <div></div>

        <div className="title">
          <Link to="/explore/events">Top Tournaments</Link>
        </div>
        <div className="row" style={{justifyContent:'center'}}>
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

        <div className="title" style={{ marginBottom: '-80px' }}>
          <Link to="/explore/games">Top Games</Link>
        </div>
        <div className="games">
          <div className="box">
            <span style={{ '--i': 2 }}>
              <Link to="">
                <img src={img12} alt="img12"></img>
              </Link>
            </span>
            <span style={{ '--i': 1 }}>
              <Link to="">
                <img src={img14} alt="img14"></img>
              </Link>
            </span>
            <span style={{ '--i': 3 }}>
              <Link to="">
                <img src={img13} alt="img13"></img>
              </Link>
            </span>
            <span style={{ '--i': 4 }}>
              <Link to="">
                <img src={img15} alt="img15"></img>
              </Link>
            </span>
            <span style={{ '--i': 5 }}>
              <Link to="">
                <img src={img16} alt="img16"></img>
              </Link>
            </span>
            <span style={{ '--i': 6 }}>
              <Link to="">
                <img src={img18} alt="img18"></img>
              </Link>
            </span>
            <span style={{ '--i': 7 }}>
              <Link to="">
                <img src={img04} alt="img04"></img>
              </Link>
            </span>
            <span style={{ '--i': 8 }}>
              <Link to="">
                <img src={img19} alt="img19"></img>
              </Link>
            </span>
          </div>
        </div>

        <div className="title">
          <Link to="/explore/teams"> Popular Teams</Link>
        </div>
        <TeamsGrid />
      </div>
    </div>
  )
}

export default Tops
