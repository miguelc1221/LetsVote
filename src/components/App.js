import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Common/Navbar/Navbar';
import Footer from './Common/Footer/Footer';
import Home from './Home/Home';
import './global.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
