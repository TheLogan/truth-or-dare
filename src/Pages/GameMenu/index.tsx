import { Button, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

// import cards
const GameMenu = () => {
  const history = useHistory();



  return <>
    <Grid container direction="column">
      <Button variant="contained" onClick={() => history.push('/game/setup')}> Play</Button>
      <Button variant="contained">Credits</Button>
    </Grid>
  </>
}

export default GameMenu;