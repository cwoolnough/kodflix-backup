import React from 'react';
import {Link} from "react-router-dom";

export default function Covers(props) {
  return (
    <Link className = "item" to={props.id}>
        <img src={props.src} alt={props.alt}/>
        <div className="title"><h1>{props.alt}</h1></div>
    </Link>
  )
}
