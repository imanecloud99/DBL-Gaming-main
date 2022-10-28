import React, { useState } from 'react'
import './HeaderSection.css'
import { Link } from 'react-router-dom'

function renderJumbo({ sourceURL }) {
  return (
    <video
      playsInline="playsInline"
      autoPlay="autoPlay"
      muted="muted"
      loop="loop"
    >
      <source src={sourceURL} type="video/mp4" />
    </video>
  )
}

function insertImage({ url, alt }) {
  return <img className="headerBackground" src={url} alt={alt} style={{}} />
}
function HeaderSection({
  headline,
  slogan,
  description,
  sloganURL,
  videoSourceURL,
  imageProps,
}) {
  const [userInfo] = useState(JSON.parse(localStorage.getItem('profile')))
  // may come in as undefined, normalize to bool
  const displayVideo = videoSourceURL !== undefined
  const sloganAttributes = sloganURL ? { href: sloganURL } : {}
  const { url, alt } =
    imageProps === undefined ? { url: null, alt: null } : imageProps

  return (
    <div className="jumbotron jumbotron-fluid vertical-center">
      {displayVideo
        ? renderJumbo({
            sourceURL: videoSourceURL,
          })
        : null}
      <div className="overlay" />
      <div className="home_header container">
        <h1 className="heading">{headline}</h1>
        <h4 className="slogan">
          <a {...sloganAttributes}>{slogan}</a>
        </h4>
        <p className="description">{description}</p>

        {!userInfo?.user && (
          <Link to="/auth" type="button" className="join">
            Join Us
          </Link>
        )}

        {userInfo?.user && (
          <div className="twoButtons">
            <a style={{ marginLeft: '30px' }}>
              <i
                className="fas fa-broadcast-tower fa-2x"
                aria-hidden="true"
              ></i>
              <Link to="/user/stream" type="button" className="connected">
                Start Streaming Now
              </Link>
            </a>
            <a style={{ marginLeft: '40px' }}>
              <i className="fa fa-trophy fa-2x" aria-hidden="true"></i>
              <Link
                to="/settings/myprofile"
                type="button"
                className="connected"
              >
                Create a Tournament
              </Link>
            </a>
          </div>
        )}
      </div>
      {url
        ? insertImage({
            url,
            alt,
          })
        : null}
    </div>
  )
}

export default HeaderSection
