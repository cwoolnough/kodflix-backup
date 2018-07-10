import React from 'react';
import Covers from './Cover';
import TVShows from './gallery-get';


export default function Gallery() {
  return (
    <div>
      <div className="flex-container">
        {
          TVShows.map(function (TVShow) {
            return <Covers src={TVShow.src} alt={TVShow.alt} id={TVShow.id} key={TVShow.id} />
          })
        }
      </div>
    </div>
  ) 
}


