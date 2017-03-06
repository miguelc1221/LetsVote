import React, { Component } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react'
import Login from '../../Auth/Login';
import './Navbar.css';

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Segment className="navbar">
        <Container>
          <Menu inverted borderless className="navbar__container">
            <Menu.Header className="navbar__header">Let's Vote</Menu.Header>
            <Login />
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;