import React, { Component } from 'react';
import './App.css'; //compiled with scss

import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>BODY CONTENT</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
