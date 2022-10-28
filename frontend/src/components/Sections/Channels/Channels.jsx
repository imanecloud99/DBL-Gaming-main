import React from 'react'

import './Channels.css'

import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/rimi.jpg'
import img3 from '../../../images/gambol.jpg'
import img4 from '../../../images/people.jpg'
import img5 from '../../../images/img26.jpg'

function Channels() {
  return (
    <div>
      <div className="section-container">
      <br></br> <h2 className="title">
      <center>Popular Channels</center>
    </h2><br></br>
        <div className="channels__container">
          {/* channel */}
          <div className="channel">
            <div className="channel__thumbnail">
              <a href="../../userChannel.jsx">
                <img src={img1} alt="" />
              </a>
            </div>
            <div className="channel__details">
              <div className="titleChan">
                <a href="../../userChannel.jsx">
                  <h3>My Channel</h3>
                </a>
                <span className="span">1.56M followers</span>
              </div>
            </div>
          </div>

          {/* channel */}
          <div className="channel">
            <div className="channel__thumbnail">
              <a href="../../userChannel.jsx">
                <img src={img2} alt="" />
              </a>
            </div>
            <div className="channel__details">
              <div className="titleChan">
                <a href="../../userChannel.jsx">
                  <h3>My Channel</h3>
                </a>
                <span className="span">1.56M followers</span>
              </div>
            </div>
          </div>

          {/* channel */}
          <div className="channel">
            <div className="channel__thumbnail">
              <a href="../../userChannel.jsx">
                <img src={img3} alt="" />
              </a>
            </div>
            <div className="channel__details">
              <div className="titleChan">
                <a href="../../userChannel.jsx">
                  <h3>My Channel</h3>
                </a>
                <span className="span">1.56M followers</span>
              </div>
            </div>
          </div>

          {/* channel */}
          <div className="channel">
            <div className="channel__thumbnail">
              <a href="../../userChannel.jsx">
                <img src={img5} alt="" />
              </a>
            </div>
            <div className="channel__details">
              <div className="titleChan">
                <a href="../../userChannel.jsx">
                  <h3>My Channel</h3>
                </a>
                <span className="span">1.56M followers</span>
              </div>
            </div>
          </div>

          {/* channel */}
          <div className="channel">
            <div className="channel__thumbnail">
              <a href="../../userChannel.jsx">
                <img src={img4} alt="" />
              </a>
            </div>
            <div className="channel__details">
              <div className="titleChan">
                <a href="../../userChannel.jsx">
                  <h3>My Channel</h3>
                </a>
                <span className="span">1.56M followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Channels
