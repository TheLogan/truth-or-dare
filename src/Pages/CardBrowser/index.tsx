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
      title = <><Typography variant="h2">{capitalizeFirstLetter(cardCat.category)}</Typography>Level: {cardCat.level}</>
    } else {
      title = <>Level: {cardCat.level}</>
    }

    lastCat = cardCat.category

    return (
      <Grid item padding={2} spacing={2}>
        <div className="categoryContainer">
          {title}
          <Grid container rowSpacing={1} columnSpacing={1} style={{ padding: '10px' }} justifyContent="center" >
            {cardCat.cards.map(card => {
              return (
                <Grid item>
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
    <Grid container direction="column" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {cardCats}
    </Grid>
  )
}

export default CardBrowser;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
