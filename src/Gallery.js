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
        <Covers src={breakingBad} alt="Breaking Bad" id='breaking-bad' />
        <Covers src={blackMirror} alt="Black Mirror" id='black-mirror' />
        <Covers src={deathNote} alt="Death Note" id='death-note' />
        <Covers src={GOT} alt="Game of Thrones" id='game-of-thrones' />
        <Covers src={theWire} alt="The Wire" id='the-wire' />
        <Covers src={walkingDead} alt="Walking Dead" id='walking-dead' /> 
      </div>
    </div>
  )
}


