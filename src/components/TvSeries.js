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
    
    return <Shimmer/>
  }
  return (
  <div className='text-white '>
     <Banner details={state}/>
     <div className='w-[95%] m-auto'>

     <MovieList title={"Trending TV Hits"} movies={movies?.nowPopularSeries}/>
     <MovieList title={"Just Released Shows"} movies={movies?.nowReleasedTodaySeries}/>
     <MovieList title={"Critics' Choice Series"} movies={movies?.tvSeries}/>
     <MovieList title={"Fresh Episodes Dropping"} movies={movies?.nowAiringTodaySeries}/>
     </div>

  </div>
)
}

export default TvSeries
