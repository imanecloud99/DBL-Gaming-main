import React from 'react'

import game from '../../data/Cardsdata'
import './CardItem.css'
import image1 from '../../images/img6.jpg'

const CardItem2 = ({ image, title, description,viewers }) => {
  return (
    <div>
      <div className="cardBox">
        <div className="imgBox">
          <img src={image} alt="" />
        </div>

        <div className="contentCat">
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{viewers} Viewers • Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem2;
