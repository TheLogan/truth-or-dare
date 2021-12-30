import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import MainMenu from './Pages/MainMenu';
import 'typeface-roboto'
import { useActions } from './Overmind';
import Admin from './Pages/Admin';
import Game from './Pages/Game';
import { Button } from '@mui/material';
import { Android } from '@mui/icons-material';
import './baseStyle.scss';

function App() {
  const actions = useActions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => { actions.game.getCards(); }, []);


  //Routing on individual pages/subroutes
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/admin/">
            <Admin />
          </Route>
          <Route path="/game"> 
            <Game />
          </Route>
          <Route path="/download">
            <Layout>
              <h3>Downloads</h3>
              <Button variant="contained" onClick={() => document.location.href = "https://drive.google.com/u/0/uc?export=download&confirm=KeQY&id=1Gpk5VfrgzZznF49S9rke4syIX3N_CGFB"} >
                <Android style={{paddingRight: '10px'}} />
                Android
              </Button>
            </Layout>
          </Route>
          <Route path="/">
            <Layout>
              <MainMenu />
            </Layout>
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
