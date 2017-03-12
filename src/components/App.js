import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./Common/Navbar/Navbar";
import Footer from "./Common/Footer/Footer";
import Home from "./Home/Home";
import NewPoll from "./NewPoll/NewPoll";
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              authed={this.props.auth}
              path="/new-poll"
              component={NewPoll}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
