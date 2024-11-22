import React from 'react'
import BannerImage from './BannerImage'
import BannerDetails from './BannerDetails'

const Banner = ({details}) => {

  
  return (
    <div>
      <BannerImage details={details}/>
      <BannerDetails details={details}/>
      
    </div>
  )
}

export default Banner
