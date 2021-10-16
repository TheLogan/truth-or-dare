import { Switch, Route, useRouteMatch } from "react-router-dom";
import Layout from "../../Components/Layout";
import GameMenu from "./GameMenu";
import GameSetup from "./GameSetup";
import Play from "./Play";

const Game = () => {
  let { url } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route exact path={`${url}`}>
          <GameMenu />
        </Route>
        <Route path={`${url}/setup`}>
          <GameSetup />
        </Route>
        <Route path={`${url}/play`}>
          <Play />
        </Route>
        <Route path={`${url}/credits`}>
          {/* <Play /> */}
        </Route>
      </Switch>
    </Layout>
  )
}

export default Game;


//           <Route path="/game/credits">
//             <Layout>
//               <Game />
//             </Layout>
//           </Route>
//           <Route path="/game">
//             <Layout>
//               <GameMenu />
//             </Layout>
//           </Route>