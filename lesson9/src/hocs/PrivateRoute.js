import React from "react";
import { Route, Link } from "react-router-dom";

export default function PrivateRoute({ authenticated, ...rest }) {
  return authenticated ? (
    <Route {...rest} />
  ) : (
    <Link to={{ pathname: "/login" }} />
  );
}
