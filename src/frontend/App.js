import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Details from '../Details/Details';
import NotFound from './NotFound/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/NotFound" component={NotFound} />
            <Route exact path="/:id" component={Details} />
          </Switch>
        </div>
      </Router>
    )
  }
}