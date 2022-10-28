import React from 'react'

import './Footer.css'


const Footer = () => (
  <div>
    <footer className="about" id="about">
      <div className="container">
        <div className="sec aboutus">
          <h2>About Us</h2>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            veniam corporis repellat perferendis tenetur laborum sunt minus
            omnis provident cum pariatur doloremque id autem natus nobis
            nostrum, eveniet repudiandae. Consequuntur?
          </span>
          <ul className="sci">
            <li>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="sec links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/store">DBL-Gaming Store</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="sec contactInfo">
          <h2>Contact Info</h2>
          <ul className="infos">
            <li>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>{' '}
              </span>
              <span> Avenue Allal Al Fassi Rabat, Morocco</span>
            </li>
            <li>
              <span>
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
              <span>
                <a href="tel:0538002700"> +212538002700</a>
              </span>
            </li>
            <li>
              <span>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <span>
                <a href="#">
                  {' '}
                  contact@inpt.ac.ma
                </a>
              </span>
            </li>
            <a
              href="/"
              className="navbar-brand p-0"
              style={{ marginTop: '15px' }}
            >
            </a>
          </ul>
        </div>
      </div>
    </footer>
    <div
      style={{
        padding: '8px 40px',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        textAlign: 'center',
        background: '#181818',
      }}
    >
      <p style={{ color: '#999' }}>
        Copyright <span>&copy;</span> 2022,{' '}
        <a
          href="/"
          style={{ color: 'white', fontWeight: 600, textDecoration: 'none' }}
        >
          DBL<span style={{ color: 'purple' }}>G</span>aming
        </a>
        . All Rights Reserved.
      </p>
    </div>
  </div>
)

export default Footer
