import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from './Gallery';
import Details from './Details';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/:Details" component={Details} />
          </switch>
        </div>
      </Router>
    )
  }
}