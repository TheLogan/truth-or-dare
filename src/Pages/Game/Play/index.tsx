import { Button, Grid } from "@mui/material";
import React from "react";
import GameCard from "../../../Components/GameCard";
import { cardState } from "../../../Components/GameCard/interfaces";
import { useActions, useAppState } from "../../../Overmind";
import { capitalizeFirstLetter } from "../../../utils/utils";
import "./style.scss";

const Play = () => {
  const { currentCard } = useAppState();
  const {discardSelected, nextCard} = useActions().game;

  const [cardState, setCardState] = React.useState<cardState>('unTouched');

  const cardExit = () => {
    discardSelected();
  }

  function renderBtn(category: "truth" | "dare") {
    return (
      <Button
        variant="contained"
        id={category}
        className="btn"
        onClick={() => nextCard(category)}
        disabled={currentCard != null}
      >
        {capitalizeFirstLetter(category)}
      </Button>
    );
  }

  const gameState = () => {
    if(currentCard === null ) return "Truth or Dare";
    if(cardState === 'bottleNotSpun') return "Click bottle";
    if(cardState === 'done') return "Swipe card"
    return "do something";
  }

  function renderBody() {
    return (
      <>
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
        {/*
        //@ts-ignore */}
        {currentCard && <div style={{ position: "absolute", left: "calc(50vw - 118px)", top: "calc(50vh - 207px)" }} ><GameCard card={currentCard} draggable cardExit={cardExit} cardState={cardState} onCardStateChange={setCardState} /> </div>}
      </>
    );
  }

  return <>
    <div id="helperText">{gameState()}</div>
    {renderBody()}

  </>;
};

export default Play;
