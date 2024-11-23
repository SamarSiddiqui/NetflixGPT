import React from 'react'
import Header from './Header'
import Banner from './Banner'
import { nowUpcomingMovies } from '../utils/movieSlice'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import Footer from './Footer'

const Movies = () => {
   useUpcomingMovies()
   const state = useSelector((store)=>store.movies?.nowUpcomingMovies)
  if (!state || state.length === 0) {
    // Show a loading spinner or placeholder while data is loading
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div>
        <Header/>
        <Banner details={state}/>
        <Footer/>
      <h2>Hello from Movies Section</h2>
    </div>
  )
}

export default Movies
