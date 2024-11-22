import React from 'react'
import { IMG_CDN } from '../utils/constants';

const BannerImage = ({details}) => {
  
  let randomImages = Math.floor(Math.random()*20)
    let backdrop_path = details[randomImages]?.backdrop_path
    
  return (
    <div>
      
    <div className="relative w-72 cursor-pointer">
      <img
        className="object-cover rounded-sm"
        src={IMG_CDN + backdrop_path}
        alt="moviesImg"
      />
      
    </div>
      
      hello from Banner IMage
    </div>
  )
}

export default BannerImage
