import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logaction } from "../../actions/logaction";
import Button from "@material-ui/core/Button";
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <Button color="primary" variant="contained">
            Home
          </Button>
        </Link>
        <Link to="/watchlist">
          <Button color="primary" variant="contained">
            Watch List
          </Button>
        </Link>
        {!this.props.user && !localStorage.getItem("user") ? (
          <Link to="signin">
            <Button color="secondary" variant="contained">
              Signin
            </Button>
          </Link>
        ) : (
          <Link
            to="#"
            onClick={(e) => {
              this.props.logaction("");
              localStorage.removeItem("user");
            }}
          >
            <Button color="primary" variant="contained">
              Sign Out
            </Button>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logaction: () => {
//       dispatch(logaction)
//     }
//   };
// };
export default connect(
  mapStateToProps,
  // mapDispatchToProps
  { logaction }
)(Navbar);
