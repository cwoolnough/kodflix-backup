import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import blackMirror from './images/blackMirror.jpg';
import breakingBad from './images/breakingBad.jpg';
import deathNote from './images/deathNote.jpg';
import GOT from './images/gameOfThrones.jpg';
import theWire from './images/theWire.jpg';
import walkingDead from './images/walkingDead.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Chris to Kodflix</h1>
        </header>
        

        <div className = "flex-container">
          <div className= "item"><img src ={breakingBad} alt="Breaking Bad"/></div>
          <div className= "item"><img src ={blackMirror} alt="Black Mirror"/></div>
          <div className= "item"><img src ={deathNote} alt="Death Note"/></div>
        </div>

        <div className = "flex-container">  
          <div className= "item"><img src = {GOT} alt="Game of Throne" /></div>
          <div className= "item"><img src = {theWire} alt="The Walking Dead" /></div>
          <div className= "item"><img src = {walkingDead} alt="Wire" /></div>
        </div>

      </div>
    );
  }
}

export default App;
