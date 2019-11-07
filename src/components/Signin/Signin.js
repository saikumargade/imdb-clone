import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import { logaction } from "../../actions/logaction";
import { connect } from "react-redux";
class Signin extends React.Component {
  state = {
    user: ""
  };
  handleName = (e) => {
    this.setState({ user: e.target.value });
  };
  render() {
    // console.log("Signin", this.props);
    // const { isLoggedIn } = this.props;
    // if (isLoggedIn) {
    //   console.log("REdirected", this.props.location.state.from);
    //   return <Redirect to={this.props.location.state.from} />;
    // }
    return (
      <div>
        <h2>Signin page</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("signinprops", this.props.user);
            this.props.logaction(this.state.user);
            localStorage.setItem("user", this.state.user);
            this.setState({ user: "" });
          }}
        >
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

export default connect(
  null,
  { logaction }
)(Signin);
