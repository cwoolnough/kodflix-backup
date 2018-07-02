import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BadBoys from './imgs/badboys.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Chris to Kodflix</h1>
        </header>
        <p className="App-intro">
          How to get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className = "flex-container">
          <h1>Black Mirror</h1>
          <h1>Breaking Bad</h1>
          <h1>Death Note</h1>
        </div>

        <div className = "flex-container">  
          <h1>Game of Throne</h1>
          <h1>The Walking Dead</h1>
          <h1>Wire</h1>
        </div>

      </div>
    );
  }
}

export default App;
