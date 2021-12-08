import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  DETAILS_ROUTE,
  ABOUTUS_ROUTE,
} from "./constants";
import { PublicRoute, PrivateRoutes } from "routes/config";
// import Details from "../pages/details";
const Login = lazy(() => import("pages/auth/login"));
const Home = lazy(() => import("pages/home"));
const Details = lazy(() => import("pages/details"));
const AboutUs = lazy(() => import("pages/aboutUs"));
const NotFound = lazy(() => import("pages/notFound"));

export function MainRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <PublicRoute path={HOME_ROUTE} exact>
            <Home />
          </PublicRoute>
          <PublicRoute path={LOGIN_ROUTE} exact>
            <Login />
          </PublicRoute>
          <PublicRoute path={DETAILS_ROUTE} exact>
            <Details />
          </PublicRoute>
          <PublicRoute path={ABOUTUS_ROUTE} exact>
            <AboutUs />
          </PublicRoute>
          <Route path={NOT_FOUND_ROUTE}>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default MainRouter;
