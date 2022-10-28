import React from 'react'

import './Events.css'
const Card = (props) => (
  <div className="cardEvent">
    <img src={props.imgUrl} alt={props.alt || 'Image'} />
    <div className="cardContent">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
)

const CardContainer = (props) => (
  <div className="cardsContainer">
    {props.cards.map((card, i) => (
      <Card
        key={i}
        title={card.title}
        content={card.content}
        imgUrl={card.imgUrl}
      />
    ))}
  </div>
)

class Events extends React.Component {
  render() {
    const cardsData = [
      {
        id: 1,
        title: 'CARD 1',
        content: 'Lorem ipsum',
        imgUrl: 'https://unsplash.it/200/200',
      },
      {
        id: 2,
        title: 'CARD 2',
        content: 'BLorem ipsum',
        imgUrl: 'https://unsplash.it/201/200',
      },
      {
        id: 3,
        title: 'CARD 3',
        content: 'PeLorem ipsum',
        imgUrl: 'https://unsplash.it/200/201',
      },
      {
        id: 4,
        title: 'CARD 4',
        content: 'Lorem ipsum',
        imgUrl: 'https://unsplash.it/201/201',
      },
      {
        id: 5,
        title: 'CARD 5',
        content: 'ReeLorem ipsum',
        imgUrl: 'https://unsplash.it/202/200',
      },
      {
        id: 6,
        title: 'CARD 6',
        content: 'WLorem ipsum',
        imgUrl: 'https://unsplash.it/200/199',
      },
      {
        id: 7,
        title: 'CARD 7',
        content: 'PLorem ipsum',
        imgUrl: 'https://unsplash.it/199/199',
      },
      {
        id: 8,
        title: 'CARD 8',
        content: 'SteLorem ipsum',
        imgUrl: 'https://unsplash.it/199/200',
      },
      {
        id: 9,
        title: 'CARD 9',
        content: 'BrLorem ipsum',
        imgUrl: 'https://unsplash.it/200/198',
      },
      {
        id: 10,
        title: 'CARD 10',
        content: 'VinceLorem ipsum',
        imgUrl: 'https://unsplash.it/198/199',
      },
    ]

    return (
      <div className="col-md-2 pd-5">
        <CardContainer cards={cardsData} />
      </div>
    )
  }
}

export default Events

// history.push
