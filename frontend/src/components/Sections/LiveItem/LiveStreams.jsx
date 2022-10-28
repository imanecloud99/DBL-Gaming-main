import React from 'react'

import './LivesSection.css'
import live from '../../../data/LiveStreamdata'

import img35 from '../../../images/img35.jpg'

function LiveStreams() {
  const info = live.lives
  return (
    <div>
      <div className="videos__container">
        {/* <!-- Video Live --> */}
        {info.map((live, i) => (
          <div className="video" key={i}>
            <div className="video__thumbnail">
              <div className="liveSymbol">Live</div>
              <img src={live.picture} alt={live.title} />
            </div>
            <div className="video__details">
              <div className="streamVid" style={{ marginTop: '8px' }}>
                <img src={live.channelLogo} alt="" />
              </div>
              <div className="titleVid">
                <h3>{live.title}</h3>
                <a href="">{live.streamer}</a>
                <span className="span">{live.viewers} Viewers • Now</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveStreams
