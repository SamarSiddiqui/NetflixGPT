import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPalyingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useSeries from '../hooks/useSeries'
import useTopRatedMovies from '../hooks/usetopRated'
import GptSearch from './GptSearch.js'
import { useSelector } from 'react-redux'

const Browse = () => {
  const state = useSelector((store)=> store?.gpt?.toggleGpt)
  console.log(process.env.REACT_APP_GEMINI_KEY);
  
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useSeries()
  useTopRatedMovies()
  
  
  return (
    <div className=''>
      <Header />
      {
        state? <GptSearch/>:
        <>
        <MainContainer />
        <SecondaryContainer />
        
        </>
      }
      
    </div>
  )
}

export default Browse

/*
-MainContainer
  - VideoContainer
  - Video Title
- SecondaryContainer
  - MovieList*n
  - Cards*n
*/ 
