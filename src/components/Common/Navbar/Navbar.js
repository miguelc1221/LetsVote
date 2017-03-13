import React, { Component, PropTypes } from "react";
import { Menu, Segment, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "../../Auth/Login";
import { connect } from "react-redux";
import * as authActions from "../../../actions/auth";
import "./Navbar.css";

class Navbar extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  constructor() {
    super();
    this.state = { activeItem: "" };

    this.handleOnLogOut = this.handleOnLogOut.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  handleOnLogOut() {
    this.props.logOut();
  }

  render() {
    const { activeItem } = this.state;
    const { isAuthenticated } = this.props.auth;
    let isLoggedIn;
    if (isAuthenticated) {
      isLoggedIn = (
        <Menu inverted borderless className="navbar__container">
          <Menu.Header
            className="navbar__header"
            as={Link}
            to="/"
            onClick={() => this.setState({ activeItem: "" })}
          >
            Let's Vote
          </Menu.Header>
          <Menu.Item
            position="right"
            active={activeItem === "New Poll"}
            name="New Poll"
            onClick={this.handleItemClick}
            as={Link}
            to="/new-poll"
          />
          <Menu.Item
            active={activeItem === "MyPolls"}
            name="MyPolls"
            as={Link}
            to="/my-polls"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            active={activeItem === "Logout"}
            name="Logout"
            onClick={this.handleOnLogOut}
          />
        </Menu>
      );
    } else {
      isLoggedIn = (
        <Menu inverted borderless className="navbar__container">
          <Menu.Header className="navbar__header">Let's Vote</Menu.Header>
          <Login />
        </Menu>
      );
    }
    return (
      <Segment className="navbar">
        <Container>
          {isLoggedIn}
        </Container>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, authActions)(Navbar);
