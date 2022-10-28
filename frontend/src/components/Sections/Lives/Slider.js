import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Slider.css'

const Slider = ({ slides, props }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
       <br></br> <h2 className="title">
      <center>Live Streams</center>
    </h2><br></br>
      <section className="slider" style={{ marginBottom: '-100px' }}>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <div>
                  <div
                    className="liveSymbol"
                    style={{
                      fontSize: '25px',
                      maxWidth: '80px',
                      borderRadius: '20px',
                      marginTop: '8px',
                      marginLeft: '8px',
                      padding: '2px',
                      position: 'relative',
                    }}
                  >
                    Live
                  </div>
                  <img src={slide.image} alt="live" className="image" />
                </div>
              )}
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Slider
