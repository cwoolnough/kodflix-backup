import React from 'react';
import { Link, Redirect } from "react-router-dom";
import TVShows from '../gallery-get';
import './Details.css';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let show = TVShows.find(function (show) {
      return show.id === id;
    });
    this.setState({ show: show });
  };

  render() {
    if (this.state.show === undefined) {
      return <Redirect to="/NotFound" />
    } else {
      return (
        <div className="details">
          <div className="details-title">
            <p>{this.state.show.alt}</p>
            <hr/>
          </div>
          <div className="details-synopsis">
            <p>{this.state.show.synopsis}</p>
            <img src={this.state.show.src} alt={this.state.show.alt} />
          </div>
          <div className="details-home">
            <Link to='/'>Home</Link>
          </div>
        </div>
      )
    }
  }
}


export default Details;