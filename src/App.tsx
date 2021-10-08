import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import CardBrowser from './Pages/CardBrowser';
import Game from './Pages/Game';
import MainMenu from './Pages/MainMenu';
import 'typeface-roboto'
import GameMenu from './Pages/GameMenu';
import GameSetup from './Pages/GameSetup';

function App() {
  return (
    <Router basename={'/game'}>
      <div>
        <Switch>
          <Route path="/admin/browse">
            <Layout>
              <CardBrowser />
            </Layout>
          </Route>

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
