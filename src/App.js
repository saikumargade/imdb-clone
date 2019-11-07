import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Protect from "./components/Protect";
import ProtectSignin from "./components/ProtectSignin";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Protect path="/watchlist" Component={WatchList} user={user} />
          <ProtectSignin
            path="/signin"
            Component={Signin}
            user={user}
            handleSubmit={this.handleSubmit}
          />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("State", state);
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(App);

// function connect(msp) {
//   const extraProps = msp(state);

//   const x = ({Component}) => {
//     return <Component {...extraProps} dispatch={dispatch}/>
//   }

//   return x;
// }
