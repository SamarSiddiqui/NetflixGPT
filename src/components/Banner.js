import React from 'react'
import BannerImage from './BannerImage'
import BannerDetails from './BannerDetails'



const Banner = ({details}) => {
  let randomDetails = Math.floor(Math.random()*details.length)
  
  let seriesDetails = details[randomDetails]
  let backdrop_path = details[randomDetails]?.backdrop_path
 
  
  
  
  return (
    <div className='relative '>
      
      <BannerImage details={backdrop_path}/>
      <BannerDetails details={seriesDetails}/>
     
      
    </div>
  )
}

export default Banner
