import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { nowUpcomingMovies, topRatedMovies } from '../utils/movieSlice'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/usetopRated'
import MovieList from './MovieList'
import useReleasedTodayMovies from '../hooks/useReleasedTodayMovies'

const Movies = () => {
  useReleasedTodayMovies()
   useUpcomingMovies()
   usePopularMovies()
   useTopRatedMovies()
   
  //  displayingImageOfTopRatedMOvies
   const state = useSelector((store)=>store.movies?.topRatedMovies)
   const movies = useSelector((store)=>store.movies)
  if (!state || state.length === 0) {
    // Show a loading spinner or placeholder while data is loading
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div>
        
        <Banner details={state}/>
        <div className=' w-[95%] m-auto'>

        <MovieList title={"Fresh Off the Reel"} movies={movies?.nowReleasedTodayMovies}/>
        <MovieList title={"Movies on the Horizon"} movies={movies?.nowUpcomingMovies}/>
        <MovieList title={"Critics' Favorites"} movies={movies?.topRatedMovies}/>
        <MovieList title={"Box Office Buzz"} movies={movies?.nowPopularMovies}/>
        </div>
        
      
    </div>
  )
}

export default Movies
