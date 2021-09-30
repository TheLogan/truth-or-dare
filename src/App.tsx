import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import CardBrowser from './Pages/CardBrowser';
import Game from './Pages/Game';
import MainMenu from './Pages/MainMenu';
import 'typeface-roboto'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/browse">
            <Layout>
              <CardBrowser />
            </Layout>
          </Route>
          <Route path="/play">
            <Layout>
              <Game />
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
