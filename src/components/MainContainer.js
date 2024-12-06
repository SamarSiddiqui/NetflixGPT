import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'
import Shimmer from './Shimmer'

const MainContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
   if(!movies) return <Shimmer/>


  const randomMovies =Math.floor( Math.random()*20
 )
 
 
  const movie = movies[randomMovies]
  
  return (
    <div className='relative -top-28'>
      <VideoTitle props={movie}/>
      <VideoBg movieID={movie?.id}/>
      
    </div>
  )
}

export default MainContainer
