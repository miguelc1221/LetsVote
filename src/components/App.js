import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Common/Navbar/Navbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Home/Home";
import NewPoll from "./NewPoll/NewPoll";
import "./global.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new-poll" component={NewPoll} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
