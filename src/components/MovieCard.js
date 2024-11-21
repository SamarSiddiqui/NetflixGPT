import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = (backdrop_path,movieName) => {
 
  
  let photoMovie = backdrop_path?.posterPath
  
   if(!photoMovie) return null
   
  return (
    <div className=''>

        <div className='relative w-72 m-1 cursor-pointer '>
            
        <img className='object-cover' src={IMG_CDN+backdrop_path?.posterPath} alt='moviesImg'/>
        <h1 className='absolute bottom-2 left-1'>movieName</h1>
        </div>
     
    </div>
  )
}

export default MovieCard
