import React from 'react'
import { IMG_CDN } from '../utils/constants';

const BannerImage = (backdrop_path) => {
  
 
    
  return (
    <div className='relative w-screen'>
      
    <div className=" ">
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent'></div>
      <img  
        className=" w-screen  object-cover"
        src={IMG_CDN + backdrop_path.details}
        alt="moviesImg"
      />
      
    </div>
      
      
    </div>
  )
}

export default BannerImage
