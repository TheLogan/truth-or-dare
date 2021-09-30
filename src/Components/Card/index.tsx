import React from "react";
import iCard from "../../Enteties/iCard";
import './style.scss'

const GameCard: React.FC<iCard> = (props) => {

  function renderBottle (){
    return <img src="../../Assets/wine-bottle.png" alt="bottle" />
  }

  return <div className={"gameCard " + props.category}>
    <div className={"content " + props.category} >
      <p>{props.description}</p>
    </div>
    {renderBottle()}
  </div>


}

export default GameCard;