import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
   if(!movies) return
//    It can be written as below
//    if(movies===null) return

 
  const movie = movies[2]
  
  return (
    <div className='relative -top-28'>
      <VideoTitle props={movie}/>
      <VideoBg movieID={movie?.id}/>
      
    </div>
  )
}

export default MainContainer
