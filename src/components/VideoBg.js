import React from 'react'

import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBg = ({movieID}) => {
   const trailerKey = useSelector((store)=>store?.movies?.trailerVideo)
  
  
  
    useMovieTrailer(movieID)

    
return (
   <div className='relative max-w-full z-30'>
     <iframe className='w-full max-h-full aspect-video' 
     src={"https://www.youtube.com/embed/"+ trailerKey+"?&mute=1&si=gUHwXCkjOytcxH4R&amp;controls=0&amp;start=10&rel=0"}
   //   {just add autoplay=1 after ?}
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
   </div>

)}

export default VideoBg;
