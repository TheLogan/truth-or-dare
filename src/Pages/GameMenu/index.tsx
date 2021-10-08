import { Button, Grid } from "@mui/material";
import React from "react";
import { useActions, useAppState } from "../../Overmind";
import { useHistory } from "react-router-dom";

// import cards
const GameMenu = () => {
  const { cardDeck } = useAppState();
  const actions = useActions();
  const history = useHistory();

  React.useEffect(() => {actions.getCards();},[]);


  return <>
    <Grid container direction="column">
      <Button variant="contained" onClick={() => history.push('/game/setup')}> Play</Button>
      <Button variant="contained">Credits</Button>
    </Grid>
  </>
}

export default GameMenu;