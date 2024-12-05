import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { API_Options } from '../utils/constants';
import { gptSearchResults } from '../utils/gptMovieSuggestion';
import Shimmer from './Shimmer';


const GptSearchBar = () => {
  const [isLoading,setIsLoading] = useState(false)
  const dispatch = useDispatch()
  
  const inputValue = useRef(null)
  const API_KEY = process.env.REACT_APP_GEMINI_KEY;
  
  let movieNames = useSelector((store)=>store.gptMovies?.gptMoviesResults)
  
  //SearchMOvie in TMDB
    const searchMovieTmdb = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie+'&include_adult=false&language=en-US&page=1', API_Options)
    
    const json = await data.json()
    
    return json.results
    
  }
  const handleGPTSearchClick = async () => {
    setIsLoading(true); // Start shimmer effect

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${inputValue?.current?.value}. Only give me the names of 5 movies, comma separated like the example result given ahead. Example Result: Koi Mil Gaya, Don, Sholay, Endgame, Whiplash`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: gptQuery }] }],
        },
      });

      const movieList = response?.data?.candidates[0]?.content?.parts[0].text.split(',');
      const promiseArray = movieList.map((movie) => searchMovieTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(gptSearchResults({ movieNames: movieList, movieResults: tmdbResults }));
    } catch (error) {
      console.error('Error fetching GPT search results:', error);
    } finally {
      setIsLoading(false); // Stop shimmer effect
    }
  };   
const clearSearchBar = ()=> {
  inputValue.current.value = ''
}
  return (
    <div className='p-[10%] w-screen '>
        
         <form className=' relative grid grid-cols-10 justify-center items-center' onSubmit={(e)=>e.preventDefault()} >
          <div className='col-span-8 relative flex items-center'>
        <input 
        ref={inputValue}  
        type='text'
        className=' italic w-[97%]   p-4 m-4 text-white rounded-lg bg-gray-100/10'
        placeholder="Type in the vibes, we'll find the flicks!"
        />
        <i onClick={clearSearchBar} className="fa-solid fa-xmark absolute right-10 cursor-pointer text-gray-100/70 hover:scale-[1.05] hover:text-white "></i>
        </div>
        <button onClick={handleGPTSearchClick}  className='col-span-2 mr-3 py-3.5 text-xl bg-red-800/70 text-white rounded-lg hover:bg-red-800'>Search</button>
        </form> 
        { isLoading && <div className='flex justify-center'>          
        <img src="https://cdn.pixabay.com/animation/2024/04/02/07/57/07-57-40-974_512.gif" className='w-40' alt='loader'/>
          
        </div>
        }

    </div>
  )
}

export default GptSearchBar
