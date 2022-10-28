import React from 'react'

import './CardItem.css'

const CardItem = ({ image, gameDetails, id }) => {
  return (
    <div onClick={() => gameDetails(id)}>
      <div className="cardBox">
        <div className="imgBox">
          <img src={image} alt="" />
        </div>

        <div className="contentCat">
          <div>
            <h2>{/*game.title*/}</h2>
            <p>{/*game.description*/}</p>
            <span>Viewers • Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
