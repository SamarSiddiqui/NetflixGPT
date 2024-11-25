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
        <Header/>
        <Banner details={state}/>
        <MovieList movies={movies?.nowReleasedTodayMovies}/>
        <MovieList movies={movies?.nowUpcomingMovies}/>
        <MovieList movies={movies?.topRatedMovies}/>
        <MovieList movies={movies?.nowPopularMovies}/>
        <Footer/>
      <h2>Hello from Movies Section</h2>
    </div>
  )
}

export default Movies
