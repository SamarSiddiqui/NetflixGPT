import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPalyingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useSeries from '../hooks/useSeries'
import useTopRatedMovies from '../hooks/usetopRated'

const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useSeries()
  useTopRatedMovies()

  return (
    <div className=''>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
