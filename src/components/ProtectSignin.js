import React from "react";
import { Route, Redirect } from "react-router-dom";
export default function ProtectSignin({
  Component,
  isLoggedIn,
  handleSubmit,
  ...rest
}) {
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log("From", props.location);
        const from = props.location.state
          ? props.location.state.from
          : undefined;
        return isLoggedIn ? (
          <Redirect to={from ? from : "/"} />
        ) : (
          <Component {...props} handleSubmit={handleSubmit} />
        );
      }}
    />
  );
}
