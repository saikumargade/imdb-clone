import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logaction } from "../../actions/logaction";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watch List</Link>
        {!this.props.user && !localStorage.getItem("user") ? (
          <Link to="signin">Signin</Link>
        ) : (
          <Link
            to="#"
            onClick={(e) => {
              this.props.logaction("");
              localStorage.removeItem("user");
            }}
          >
            Sign Out
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { logaction }
)(Navbar);
