import { Redirect, Route } from "react-router";
import { useAppState } from "../../Overmind";

const PrivateRoute: React.FC<{path: string}> = ({ children, ...rest }) => {
  const { login } = useAppState();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        login.token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
