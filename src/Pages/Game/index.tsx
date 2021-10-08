import { Button, Grid } from "@mui/material";
import React from "react";
import GameCard from "../../Components/GameCard";
import { useActions, useAppState } from "../../Overmind";
import { capitalizeFirstLetter } from "../../utils/utils";
import "./style.scss";

const Game = () => {
  const { currentCard } = useAppState();
  const actions = useActions();

  function renderBtn(category: "truth" | "dare") {
    return (
      <Button
        variant="contained"
        id={category}
        className="btn"
        onClick={() => actions.nextCard(category)}
      >
        {capitalizeFirstLetter(category)}
      </Button>
    );
  }

  function renderBody() {
    if (currentCard) {
      return <GameCard card={currentCard} />;
    }

    return (
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignContent="space-evenly"
      >
        {renderBtn("truth")}
        <h3 id="or">Or</h3>
        {renderBtn("dare")}
      </Grid>
    );
  }

  return <>{renderBody()}</>;
};

export default Game;
