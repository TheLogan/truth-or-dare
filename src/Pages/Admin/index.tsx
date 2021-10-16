import { Button } from "@mui/material";
import { Switch, Route, useRouteMatch, useHistory } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useAppState } from "../../Overmind";
import AdminLogin from "./AdminLogin";
import CardBrowser from "./CardBrowser";

const Admin: React.FC = (props) => {
  const { url } = useRouteMatch();
  const { login } = useAppState();
  const history = useHistory();

  const renderMenu = () => {
    if (login.token) {
      return (
        <div>
          <Button variant="contained" onClick={() => history.push('/admin/browse')}>Browse cards</Button>
          <Button variant="contained" >Review card edits</Button>
        </div>
      )
    }
    return (
      <Button variant="contained" onClick={() => history.push('/admin/login')}>Log in</Button>
    )
  }

  return (
    <>
      <Layout>

        <Switch>
          <Route exact path={url}>
            <h3>Admin menu</h3>
            {renderMenu()}
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
