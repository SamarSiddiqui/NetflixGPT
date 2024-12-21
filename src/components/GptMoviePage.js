import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMoviePage = () => {

  let movieNames = useSelector((store)=>store.gptMovies?.gptMoviesResults?.movieNames)
  let movieDetails = useSelector((store)=>store.gptMovies?.gptMoviesResults?.movieResults)
 
  if(!movieDetails) return null
  
  return (
    <div className='text-white  bg-transparent  bg-opacity-50  w-[95%] m-auto '>
     {
      movieNames.map((name,index)=> 
      <MovieList 
      key={name || index}       
      movies={movieDetails[index]}/>)
     }
    
    </div>
  )
} 

export default GptMoviePage
