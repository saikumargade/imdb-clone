import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watch List</Link>
        <Link to="signin">Sign in</Link>
      </div>
    );
  }
}
