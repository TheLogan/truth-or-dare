import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import Game from './Pages/Game';
import MainMenu from './Pages/MainMenu';

function App() {
  return (
    <Router>
      <div>
        <Switch>
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
