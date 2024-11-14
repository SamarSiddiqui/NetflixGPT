import React from 'react'

import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBg = ({movieID}) => {
   const trailerKey = useSelector((store)=>store?.movies?.trailerVideo)
  
  
  
    useMovieTrailer(movieID)

    
return (
   <div className='relative max-w-full'>
     <iframe className='w-full aspect-video' 
     src={"https://www.youtube.com/embed/"+ trailerKey+"?autoplay=1&mute=1&si=gUHwXCkjOytcxH4R&amp;controls=0&amp;start=10"}
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
     </div>

)}

export default VideoBg;
