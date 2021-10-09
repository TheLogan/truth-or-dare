import React, { useEffect, useState } from "react";
import { iCard } from './interfaces'
import bottle from '../../Assets/img/wine-bottle.png';
import './style.scss'
import BottleRotation from "../../FX/BottleRotation";
import Draggable from "../../FX/Draggable";
import { formatCardText, getRotation, randomRange } from "../../utils/utils";


const GameCard: React.FC<iCard> = (props) => {
  const [descriptiveText, setDescriptiveText] = useState('');
  const [bottleState, setBottleState] = useState<'unclicked' | 'clicked' | 'done'>('unclicked');

  const [rotation] = useState(getRotation());
  const [timing] = useState(randomRange(2, 3) * 1000);

  useEffect(() => {
    setDescriptiveText(formatCardText(props.card.description));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function renderBottle() {
    if (props.card.isBottle)
      return (
        <div id="bottleWrapper">
          <BottleRotation
            rotate={bottleState !== 'unclicked'}
            rotation={rotation}
            timing={timing}
            onDone={() => setBottleState('done')}
          >
            <img id="bottle" src={bottle} alt="bottle" draggable={false}
              onClick={() => setBottleState('clicked')}
            />
          </BottleRotation>
        </div>
      )
    return <></>
  }

  const cardExit = () => props.cardExit && props.cardExit();

  function renderBody() {
    const card = (
      <div className={"gameCard " + props.card.category} onClick={() => props.onClick && props.onClick(props.card)}>
        <div className={"content " + props.card.category} >
          <p>{descriptiveText}</p>
        </div>
        {renderBottle()}
      </div>
    )

    if (props.draggable) {
      if (props.card.isBottle === false || bottleState === 'done')
        return <Draggable cardExit={cardExit}>{card}</Draggable>
    }
    return card;
  }


  return renderBody();
}

export default GameCard;