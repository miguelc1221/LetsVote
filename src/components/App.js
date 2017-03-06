import React, { Component } from 'react';
import Navbar from './Common/Navbar/Navbar';
import Footer from './Common/Footer/Footer';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
