import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import GameCard from '../../Components/Card';
import CardModal from '../../Components/CardModal';
import eCard from '../../Entities/eCard';
import { iCardCategory } from '../../Entities/iCardCategory';
import './style.scss'

const CardBrowser: React.FC = (props) => {
  const cardData: iCardCategory[] = require('../../Assets/cardsOnFile.json')
  const [selectedCard, setSelectedCard] = useState<null | eCard>(null);
  let lastCat = '';
  const cardCats = cardData.map(cardCat => {
    let title = <></>
    if (lastCat !== cardCat.category) {
      title = <><Typography variant="h2" >{capitalizeFirstLetter(cardCat.category)}</Typography><Typography variant="h5">Level: {cardCat.level}</Typography></>
    } else {
      title = <Typography variant="h5">Level: {cardCat.level}</Typography>
    }

    lastCat = cardCat.category

    return (
      <Grid item key={cardCat.category + cardCat.level}>
        <div className="categoryContainer">
          <div className="titlebar">
            {title}
          </div>
          <Grid container rowSpacing={1} columnSpacing={1} style={{ padding: '10px' }} justifyContent="center" >
            {cardCat.cards.map(card => {
              card.category = cardCat.category;
              card.level = cardCat.level;
              return (
                <Grid item key={card.description}>
                  <GameCard onClick={(card) => setSelectedCard(card)} card={card} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </Grid>
    )
  });

  return (
    <>
      <Grid container direction="column" >
        {cardCats}
      </Grid>
      {selectedCard &&
        <CardModal selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />
      }
    </>
  )
}

export default CardBrowser;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
