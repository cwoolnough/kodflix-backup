import React from 'react';
import { Link } from "react-router-dom";
import TVShows from './gallery-get';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let show = TVShows.find(function(show) {
      return show.id === id;
    });
    this.setState({show: show});
  };

  render() {
    return (
      <div>
        <p>{this.state.show.alt}</p>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}


export default Details;