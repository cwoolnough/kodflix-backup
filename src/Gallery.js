import React from 'react';
import blackMirror from './images/blackMirror.jpg';
import breakingBad from './images/breakingBad.jpg';
import deathNote from './images/deathNote.jpg';
import GOT from './images/gameOfThrones.jpg';
import theWire from './images/theWire.jpg';
import walkingDead from './images/walkingDead.jpg';
import Covers from './Cover';



export default function Gallery() {
  return (
    <div>
      <div className="flex-container">
        <Covers src={breakingBad} alt="Breaking Bad" />
        <Covers src={blackMirror} alt="Black Mirror" />
        <Covers src={deathNote} alt="Breaking Bad" />
      </div>
      <div className="flex-container">
        <Covers src={GOT} alt="Game of Thrones" />
        <Covers src={theWire} alt="The Wire" />
        <Covers src={walkingDead} alt="Walking Dead" />
      </div>
    </div>
  )
}


