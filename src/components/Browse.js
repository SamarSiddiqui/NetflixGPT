import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPalyingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

import useTopRatedMovies from '../hooks/usetopRated'
import GptSearch from './GptSearch.js'
import { useSelector } from 'react-redux'
import useAiringToday from '../seriesHooks/useAiringToday.js'
import useOnTheAirSereis from '../seriesHooks/useOnTheAirSereis.js'
import useSeries from '../hooks/useSeries.js'
const Browse = () => {
  const state = useSelector((store)=> store?.gpt?.toggleGpt)
  
  useAiringToday()
  useOnTheAirSereis()
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useSeries()  
  useTopRatedMovies()
  
  
  return (
    <div className=''>
      
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
