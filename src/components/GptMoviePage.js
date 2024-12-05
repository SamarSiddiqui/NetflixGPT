import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMoviePage = () => {

  let movieNames = useSelector((store)=>store.gptMovies?.gptMoviesResults?.movieNames)
  let movieDetails = useSelector((store)=>store.gptMovies?.gptMoviesResults?.movieResults)
  // let {movieName} = movieNames
  // if(!movieNames) return <Shimmer/>
  if(!movieDetails) return null
  console.log(movieDetails);
  
  return (
    <div className='text-white  bg-black border-red-800 bg-opacity-5  0'>
     {
      movieNames.map((name,index)=> 
      <MovieList 
      key={name}       
      movies={movieDetails[index]}/>)
     }
    
    </div>
  )
} 

export default GptMoviePage
