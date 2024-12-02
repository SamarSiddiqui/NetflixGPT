import React from 'react'
import Banner from './Banner'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import useOnTheAirSereis from '../seriesHooks/useOnTheAirSereis';
import useAiringToday from '../seriesHooks/useAiringToday';
import useSeries from '../hooks/useSeries';
import useReleasedTodaySeries from '../seriesHooks/useReleasedToday';
import usePopularSeries from '../seriesHooks/usePopularSeries';
import Shimmer from './Shimmer';


const TvSeries = () => {
  useOnTheAirSereis()
  useAiringToday()
  useReleasedTodaySeries()
  useSeries()
  usePopularSeries()
  
  const movies = useSelector((store)=>store.movies)
  // TopRated 
  const state = useSelector((store)=>store.movies?.tvSeries)
  if (!state || state.length === 0) {
    // Show a loading spinner or placeholder while data is loading
    return <Shimmer/>
  }
  return (
  <div className='text-white'>
     <Banner details={state}/>
     <MovieList movies={movies?.nowReleasedTodaySeries}/>
     <MovieList movies={movies?.nowPopularSeries}/>
     <MovieList movies={movies?.nowAiringTodaySeries}/>
     <MovieList movies={movies?.tvSeries}/>

  </div>
)
}

export default TvSeries
