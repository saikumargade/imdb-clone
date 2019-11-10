import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logaction } from "../../actions/logaction";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="navbar">
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton> */}
              {/* <Typography variant="h6" color="inherit" className={classes.grow}>
                News
              </Typography> */}
              {/* <Button color="inherit">Login</Button> */}

              <Link to="/">
                <Button color="inherit" className={classes.menuButton}>
                  Home
                </Button>
              </Link>
              <Link to="/movies">
                <Button color="inherit" className={classes.grow}>
                  Movies
                </Button>
              </Link>
              <Link to="/watchlist">
                <Button color="inherit" className={classes.grow}>
                  Watch List
                </Button>
              </Link>
              {!this.props.user && !localStorage.getItem("user") ? (
                <Link to="signin">
                  <Button color="secondary" variant="contained">
                    Sign in
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
                  <Button color="inherit">Sign Out</Button>
                </Link>
              )}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const Comp = withStyles(styles)(Navbar);

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
)(Comp);
