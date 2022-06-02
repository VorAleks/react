import React from "react";
import { Route, Link } from "react-router-dom";

export default function PublicRoute({ authenticated, ...rest }) {
  return !authenticated ? <Route {...rest} /> : <Link to="/chats" />;
}
