import React from "react";
import {iCard} from './interfaces'
import './style.scss'

const GameCard: React.FC<iCard> = (props) => {

  function renderBottle() {
    if (props.card.isBottle)
      return <img src="url('../../Assets/wine-bottle.png')" alt="bottle" />
    return <></>
  }

  return <div className={"gameCard " + props.card.category} onClick={() => props.onClick(props.card)}>
    <div className={"content " + props.card.category} >
      <p>{props.card.description}</p>
    </div>
    {renderBottle()}
  </div>


}

export default GameCard;