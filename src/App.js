import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import WatchList from "./components/WatchList/WatchList";
import "./App.css";
import Signin from "./components/Signin/Signin";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!</h1> */}
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route exact path="/signin" component={Signin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
