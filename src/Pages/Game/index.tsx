import { Button, Grid } from "@mui/material";
import React from "react";
import GameCard from "../../Components/GameCard";
import './style.scss'

const Game = () => {
  const [currentCard, setCurrentCard] = React.useState(null);

  function renderBody() {
    if (currentCard) {
      return <GameCard card={currentCard} />;
    }

    return (
      <Grid container direction="column" justifyContent="space-between" alignContent="space-evenly">
        <Button variant="contained" id="truthBtn">Truth</Button>
        <Button variant="contained" id="dareBtn">Dare</Button>
      </Grid>
    );
  }

  return <>{renderBody()}</>;
};

export default Game;
