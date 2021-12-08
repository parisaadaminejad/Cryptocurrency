import { Redirect, Route } from "react-router-dom";
import { LOGIN_ROUTE, HOME_ROUTE } from "./constants";

export const PublicRoute = ({
  children,
  isAuthenticated,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated & restricted ? (
          <Redirect
            to={{
              pathname: HOME_ROUTE,
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export function PriveteRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_ROUTE,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
