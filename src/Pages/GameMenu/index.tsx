import { Button, Grid } from "@mui/material";
import { ArrowRight } from '@mui/icons-material'
import { useHistory } from "react-router-dom";
import './style.scss';

// import cards
const GameMenu = () => {
  const history = useHistory();



  return <>
    <Grid container direction="column" className="gameMenu" justifyContent="space-evenly" alignContent="flex-end">
      <Grid item>
        <h1>Logans</h1>
        <div className="bg">
          <span className="blue">Truth</span>
          <span className="gold">or</span>
          <span className="pink">Dare</span>
        </div>
      </Grid>

      <Button variant="contained" onClick={() => history.push('/game/setup')} id="playBtn">
        <ArrowRight className="arrow" />
      </Button>
      <Button variant="contained" id="creditsBtn">Credits</Button>
    </Grid>
  </>
}

export default GameMenu;