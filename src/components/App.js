import React, { Component } from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Common/Navbar/Navbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Home/Home";
import NewPoll from "./NewPoll/NewPoll";
import MyPolls from "./MyPolls/MyPolls";
import Vote from "./Vote/Vote";
import Chart from "./Chart/Chart";
import NotFound from "./Common/NotFound/NotFound";
import history from "../history";
import "./global.css";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />}
    />
  );
}

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/vote/:id" component={Vote} />
            <Route excat path="/chart/:id" component={Chart} />
            <PrivateRoute
              authed={this.props.auth}
              path="/new-poll"
              component={NewPoll}
            />
            <PrivateRoute
              authed={this.props.auth}
              path="/my-polls"
              component={MyPolls}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
