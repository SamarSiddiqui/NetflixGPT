import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = (backdrop_path,movieName) => {
 
  
  let photoMovie = backdrop_path?.posterPath
  
  if(!photoMovie) return null
   
  return (
    <div className="movieCards border border-red-600 relative  m-1">
    <div className=" relative w-80 cursor-pointer  ">
      <img
        className="movieCardsImg object-cover rounded-sm"
        src={IMG_CDN + backdrop_path?.posterPath}
        alt="moviesImg"
      />
      {/* <div className='movieInfo'>
        <h1>title</h1>
        <p>lorem100wmndkwndknd wdkwndknw   kndkw dmm wkdwqd d dqwd d dkwq dwq dd d qwkdwq dm </p>
      </div> */}
    
    </div>
  </div>
  
  )
}

export default MovieCard
