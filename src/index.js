import React from "react";
import ReactDOM from "react-dom";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { AUTHORIZED, UNAUTHORIZED } from "./routes/routes";
import "./assets/main.css";

const Unauthenticated = () =>
  UNAUTHORIZED.map((route, id) => (
    <Route
      key={id}
      exact
      path={route.slug}
      component={route.component}
      render={route.render}
    />
  ));

const AuthRoutes = () =>
  AUTHORIZED.map((route, id) => (
    <Route
      key={id}
      exact
      path={route.slug}
      component={route.component}
      render={route.render}
    />
  ));

const App = () => {
  const token = window.localStorage.getItem("token") || "";

  if (!token) {
    <Redirect to="/signup" />;
  }

  return token ? <AuthRoutes /> : <Unauthenticated />;
};

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <ToastContainer />
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
