import React from 'react'
import Banner from './Banner'
import useAllTrending from '../hooks/useAllTrending'
import { useSelector } from 'react-redux'
import useReleasedTodayMovies from '../hooks/useReleasedTodayMovies'
import useReleasedTodaySeries from '../seriesHooks/useReleasedToday'
import MovieList from './MovieList'
import Shimmer from './Shimmer'

const Trending = () => {
    useAllTrending()
    useReleasedTodayMovies()
    useReleasedTodaySeries()

    const state = useSelector((store)=>store.movies?.nowTrendingAll)
    const movies = useSelector((store)=>store.movies)

    // const movies = useSelector((store)=>store.movies)
   if (!state || state.length === 0) {
     // Show a loading spinner or placeholder while data is loading
     return <Shimmer/>
   }
  return (
    <div>
        
        <Banner details={state}/>
        <div className='w-[95%] m-auto'>
        {/* ReleasedMovies */}
        <MovieList title={"Hot Off the Reel"} movies={movies?.nowReleasedTodayMovies}/>
        {/* ReleasedTvSeries */}
        <MovieList title={"Freshly Dropped Shows"} movies={movies?.nowReleasedTodaySeries}/>
        </div>
    </div>
  )
}

export default Trending;
