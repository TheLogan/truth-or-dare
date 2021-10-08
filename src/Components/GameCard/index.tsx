import React from "react";
import { iCard } from './interfaces'
import './style.scss'

const GameCard: React.FC<iCard> = (props) => {

  function renderBottle() {
    if (props.card.isBottle)
      return <img src="url('../../Assets/wine-bottle.png')" alt="bottle" />
    return <></>
  }

  return <div className={"gameCard " + props.card.category} onClick={() => props.onClick && props.onClick(props.card)}>
    <div className={"content " + props.card.category} >
      <p>{props.card.description}</p>
    </div>
    {renderBottle()}
  </div>


}

export default GameCard;

const rangeReg = /\[\d{1,2}..\d{1,2}\]/g;
const spinBottle = "*spinBottle*";
const direction = "*direction*";
const pieces = "*12pieces*" // for manipulating an amount of pieces of clothing
const wordEndings = "*wordEnding*" // "For the next two turns you must end every sentence with *wordEnding*, if you forget you must drink"
const title = "*title*" // "From now on all other players must refer to you as *title*, if they forget they must *drinkStrip*"
const age = "*youngOld*" // The *youngOld* player must drink" youngest/oldest
// "The person with the *age* cellphone drinks"
const leastMost = "*leastMost*" // "The player wearing the *leastMost* clothes must drink"
const category = "*category*"; // "Players, starting with you, must name a *brandName* within the category of *category*, first to fail drinks"

/* IDEAS */
    // Countdown function