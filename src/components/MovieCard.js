import React from 'react'
import { IMG_CDN } from '../utils/constants';

const MovieCard = (backdrop_path) => {
   

  return (
    <div className=''>

        <div className='w-72 m-1 '>
            
            <img className='object-cover' src={IMG_CDN+backdrop_path?.posterPath} alt='moviesImg'/>
        </div>
     
    </div>
  )
}

export default MovieCard
