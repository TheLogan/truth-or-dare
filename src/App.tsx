import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import CardBrowser from './Pages/Admin/CardBrowser';
import Game from './Pages/Game';
import MainMenu from './Pages/MainMenu';
import 'typeface-roboto'
import GameMenu from './Pages/GameMenu';
import GameSetup from './Pages/GameSetup';
import { useActions } from './Overmind';
import Admin from './Pages/Admin';

function App() {
  const actions = useActions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {actions.game.getCards();},[]);


  return (
    <Router basename={window.location.hostname.includes('localhost') ? '' : '/game'}>
      <div>
        <Switch>
          <Route path="/admin/">
            <Admin />
          </Route>
          {/* <Route path="/admin/browse">
            <Layout>
              <CardBrowser />
            </Layout>
          </Route> */}

          <Route path="/game/setup">
            <Layout>
              <GameSetup />
            </Layout>
          </Route>
          <Route path="/game/play">
            <Layout>
              <Game />
            </Layout>
          </Route>
          <Route path="/game/credits">
            <Layout>
              {/* <Game /> */}
            </Layout>
          </Route>
          <Route path="/game">
            <Layout>
              <GameMenu />
            </Layout>
          </Route>

          <Route path="/">
            <Layout>
              <MainMenu />
            </Layout>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
