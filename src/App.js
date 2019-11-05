import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Protect from "./components/Protect";
import ProtectSignin from "./components/ProtectSignin";

class App extends React.Component {
  state = {
    isLoggedIn: false
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("fhdsjkfh");
    this.setState({
      isLoggedIn: true
    });
    // console.log("clicked submit button");
  };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="App">
        {/* <h1>Hello World!</h1> */}
        <BrowserRouter>
          <Navbar />
          <Protect exact path="/" Component={Home} isLoggedIn={isLoggedIn} />
          <Protect
            path="/watchlist"
            Component={WatchList}
            isLoggedIn={isLoggedIn}
          />
          {/* <Route
            path="/signin"
            render={(props) => {
              return (
                <Signin
                  {...props}
                  handleSubmit={this.handleSubmit}
                  isLoggedIn={isLoggedIn}
                />
              );
            }}
          /> */}
          <ProtectSignin
            path="/signin"
            Component={Signin}
            isLoggedIn={isLoggedIn}
            handleSubmit={this.handleSubmit}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
