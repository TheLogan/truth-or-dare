import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './Components/Layout';
import MainMenu from './Pages/MainMenu';
import 'typeface-roboto'
import { useActions } from './Overmind';
import Admin from './Pages/Admin';
import Game from './Pages/Game';

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

          <Route path="/game">
            <Game />
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
