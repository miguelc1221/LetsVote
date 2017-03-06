import React, { Component } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react'
import './Navbar.css';

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Segment inverted className="navbar">
        <Container>
          <Menu inverted pointing secondary className="navbar__container">
            <Menu.Header className="navbar__header">Let's Vote</Menu.Header>
            <Menu.Item position='right' name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick} />
          </Menu>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;