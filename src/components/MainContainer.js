import React from 'react'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoTitle'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
   if(!movies) return
//    It can be written as below
//    if(movies===null) return

  const movie = movies[4]
  
  return (
    <div>
      <VideoTitle props={movie}/>
      <VideoBg movieID={movie?.id}/>
       Hello From Main Container.
    </div>
  )
}

export default MainContainer
