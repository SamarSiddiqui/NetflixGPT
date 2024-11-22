import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = (backdrop_path,movieName) => {
 
  
  let photoMovie = backdrop_path?.posterPath
  
  if(!photoMovie) return null
   
  return (
    <div className="relative m-1 border transform-gpu transition-transform duration-500 hover:scale-110 hover:translate-z-50">
    <div className="relative w-72 cursor-pointer">
      <img
        className="object-cover rounded-sm"
        src={IMG_CDN + backdrop_path?.posterPath}
        alt="moviesImg"
      />
      <h1 className="absolute bottom-2 left-1 text-white font-bold">
        movieName
      </h1>
    </div>
  </div>
  
  )
}

export default MovieCard
