import { Grid, Typography } from '@mui/material';
import React from 'react';
import GameCard from '../../Components/Card';
import { iCardCategory } from '../../Enteties/iCardCategory';
import './style.scss'

const CardBrowser: React.FC = (props) => {
  const cardData: iCardCategory[] = require('../../Assets/cardsOnFile.json')
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
              return (
                <Grid item key={card.description}>
                  <GameCard {...card} category={cardCat.category} level={cardCat.level} />
                </Grid>
              )
            })}
          </Grid>
        </div>
      </Grid>
    )
  });

  return (
    <Grid container direction="column" >
      {cardCats}
    </Grid>
  )
}

export default CardBrowser;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
