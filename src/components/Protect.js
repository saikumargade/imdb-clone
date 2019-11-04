import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function Protect({ Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("Props", props);
        return isLoggedIn ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location.pathname }
            }}
          />
        );
      }}
    />
  );
}
