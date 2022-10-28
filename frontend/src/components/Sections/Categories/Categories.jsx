import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './Categories.css'
import img23 from '../../../images/img23.png'

function Categories() {
  return (
    <div>
      <div className="section-container">
      <br></br> <h2 className="title">
      <center><span>C</span>atégories</center>
    </h2><br></br>
        <Container style={{display: 'flex', flexWrap:'wrap'}}>
          <div className="containerCat">
            <div className="boxCat">
              <Link to="/categories/music">
                <div className="imgBox">
                  <img src={img23} />
                </div>
                <div className="contentCat">
                  <div>
                    <h2>Music</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
           
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Categories
