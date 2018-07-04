import React from 'react';

export default function Covers(props) {
  return (
    <div className="item">
      <img src={props.src} />
      <div className="title"><h1>{props.alt}</h1></div>
    </div>
  )
}
