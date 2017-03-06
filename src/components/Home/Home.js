import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react'

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='home__jumbo'>
          <Header textAlign='center' className='home__jumbo-header'>
            <Header.Content as='h1'>
              Let's Vote
            </Header.Content>
            <Header.Subheader as='h2'>
              Create Custom Polls And Share Them With Friends
            </Header.Subheader>
            <Header>
              <Button color='olive'>Sign up</Button>
            </Header>
          </Header>
        </div>
        <div className='home__get-started'>
          <div className='home__get-started-innerContainer'>
            <h1>Getting started</h1>
            <div className='unordered-list'>
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

export default Home;