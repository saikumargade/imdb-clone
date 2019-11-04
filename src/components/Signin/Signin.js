import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Signin.css";
export default class Signin extends React.Component {
  render() {
    console.log("Signin", this.props);
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      console.log("REdirected", this.props.location.state.from);
      return <Redirect to={this.props.location.state.from} />;
    }
    return (
      <div>
        <h2>Signin page</h2>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input
            type="text"
            onChange={this.handleName}
            placeholder="username"
          />
          <input
            type="text"
            onChange={this.handlePassword}
            placeholder="password"
          />
          <input type="submit" value="Login" />
        </form>
        <Link to="signup">Signup</Link>
      </div>
    );
  }
}
