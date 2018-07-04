import React from 'react';
import blackMirror from './images/blackMirror.jpg';
import breakingBad from './images/breakingBad.jpg';
import deathNote from './images/deathNote.jpg';
import GOT from './images/gameOfThrones.jpg';
import theWire from './images/theWire.jpg';
import walkingDead from './images/walkingDead.jpg';

export default function Gallery(props) {
  return (
    <div>
      <div className="flex-container">
        <div className="item">
          <img src={breakingBad} alt="Breaking Bad" />
          <div className="title"><h1>Breaking Bad</h1></div>
        </div>
        <div className="item">
          <img src={blackMirror} alt="Black Mirror" />
          <div className="title"><h1>Black Mirror</h1></div>
        </div>
        <div className="item">
          <img src={deathNote} alt="Death Note" />
          <div className="title"><h1>Death Note</h1></div>
        </div>
      </div>

      <div className="flex-container">
        <div className="item">
          <img src={GOT} alt="Game of Throne" />
          <div className="title"><h1>Game of Thrones</h1></div>
        </div>
        <div className="item">
          <img src={theWire} alt="The Wire" />
          <div className="title"><h1>The Wire</h1></div>
        </div>
        <div className="item">
          <img src={walkingDead} alt="Walking Dead" />
          <div className="title"><h1>Walking Dead</h1></div>
        </div>
      </div>
    </div>
  )
}

