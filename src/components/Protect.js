import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function Protect({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return false ? <Component /> : <Redirect to="/signin" />;
      }}
    />
  );
}
