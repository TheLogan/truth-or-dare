import { Switch, Route, useRouteMatch } from "react-router-dom";
import Layout from "../../Components/Layout";
import AdminLogin from "./AdminLogin";
import CardBrowser from "./CardBrowser";

const Admin: React.FC = (props) => {
  let { url } = useRouteMatch();

  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={url}>
            <h3>This is exact path</h3>
          </Route>
          <Route path={`${url}/login`}>
            <AdminLogin />
          </Route>
          <Route path={`${url}/browse`}>
            <CardBrowser />
          </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default Admin;
