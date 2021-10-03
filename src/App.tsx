import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import CardBrowser from './Pages/CardBrowser';
import Game from './Pages/Game';
import MainMenu from './Pages/MainMenu';
import 'typeface-roboto'
import GameMenu from './Pages/GameMenu';

function App() {
  return (
    <Router basename={'/game'}>
      <div>
        <Switch>
          <Route path={`${process.env.PUBLIC_URL}/admin/browse`}>
            <Layout>
              <CardBrowser />
            </Layout>
          </Route>

          <Route path={`${process.env.PUBLIC_URL}/game`}>
            <Layout>
              <GameMenu />
            </Layout>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/game/settings`}>
            <Layout>
              {/* <Game /> */}
            </Layout>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/game/play`}>
            <Layout>
              <Game />
            </Layout>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/game/credits`}>
            <Layout>
              {/* <Game /> */}
            </Layout>
          </Route>
          

          <Route path={`${process.env.PUBLIC_URL}/`}>
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
