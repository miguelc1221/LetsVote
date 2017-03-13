import React, { Component, PropTypes } from "react";
import { Header } from "semantic-ui-react";
import { connect } from "react-redux";
import Signup from "../Auth/Signup";

import "./Home.css";

class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    tokenExpired: PropTypes.bool
  };

  render() {
    let message = (
      <Header textAlign="center" className="home__jumbo-header">
        <Header.Content as="h1">
          Let's Vote
        </Header.Content>
        <Header.Subheader as="h2">
          Create Custom Polls And Share Them With Friends
        </Header.Subheader>
        <Header>
          <Signup />
        </Header>
      </Header>
    );

    if (this.props.isAuthenticated) {
      message = (
        <Header textAlign="center" className="home__jumbo-header">
          <Header.Content as="h1">
            Welcome back
          </Header.Content>
          <Header.Subheader as="h2">
            Create Custom Polls And Share Them With Friends
          </Header.Subheader>
        </Header>
      );
    }

    if (this.props.tokenExpired) {
      message = (
        <Header textAlign="center" className="home__jumbo-header">
          <Header.Content as="h1">
            Please log in again to continue
          </Header.Content>
        </Header>
      );
    }

    console.log(this.props.isAuthenticated);
    console.log(this.props.tokenExpired);
    return (
      <div className="home">
        <div className="home__jumbo">
          {message}
        </div>
        <div className="home__get-started">
          <div className="home__get-started-innerContainer">
            <h1>Getting started</h1>
            <div className="unordered-list">
              <ol>
                <li>Sign up</li>
                <li>Create a new poll</li>
                <li>Share given link with participants</li>
                <li>Check results under (My Polls) </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  tokenExpired: state.auth.tokenExpired
});

export default connect(mapStateToProps)(Home);
