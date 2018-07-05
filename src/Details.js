import React from 'react';
import {Link} from "react-router-dom";

export default function Details() {
  return (
    <div>
      <p>"Hello, this will be the details page for each Movie & TV show :)"</p>
      <Link to ='/'>Home</Link>
    </div>
  )
}