import React from 'react';
import { Link } from "react-router-dom";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, this will be the details page for each Movie & TV show :)"
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: "Coming Soon!"
      })
    }, 3000)
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <Link to='/'>Home</Link>
      </div>
    )
  }
}


export default Details;