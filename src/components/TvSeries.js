import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { useSelector } from 'react-redux';
import useSeries from '../hooks/useSeries';
import useOnTheAirSereis from '../hooks/useOnTheAirSereis';
import useAiringToday from '../seriesHooks/useAiringToday';
import Footer from './Footer';
import MovieList from './MovieList';


const TvSeries = () => {
  useSeries()
  useOnTheAirSereis()
  useAiringToday()

  const movies = useSelector((store)=>store.movies)
  const state = useSelector((store)=>store.movies?.onTheAirSeries)
  if (!state || state.length === 0) {
    // Show a loading spinner or placeholder while data is loading
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className='text-white'>
      <Header/>
     <Banner details={state}/>
     <MovieList movies={movies?.onTheAirSeries}/>
     <MovieList movies={movies?.tvSeries}/>
     <Footer/>

</div>
  )
}

export default TvSeries
