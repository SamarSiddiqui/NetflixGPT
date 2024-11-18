import React, { useRef } from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'
import { GoogleGenerativeAI } from '@google/generative-ai'
import axios from 'axios';
import { API_Options } from '../utils/constants';
// const {GoogleGenerativeAI} = require('@google/generative-ai')
// import { useRef } from 'react'

// console.log(process.env.REACT_APP_API_KEY);

const GptSearchBar = () => {
  const langKey = useSelector((store)=>store.lang.lang)
  
  const inputValue = useRef(null)
  
  //SearchMOvie in TMDB
  
  const searchMovieTmdb = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie+'&include_adult=false&language=en-US&page=1', API_Options)
    
    const json = await data.json()
    
    return json.results
    
  }
  const handleGPTSearchClick = async () => {  
    
     const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${inputValue?.current?.value}.Only give me the names of 5 movies, comma separated like the example result given ahead. Example Result: Koi Mil Gaya, Don, Sholay, Endgame, Whiplash`;
    console.log("Loading");
    const response = await axios({
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD2LJCkLBXJr6RdqjH9FKK_NHq761nhyh8",
    method: "post",
    data: {
    contents:[{parts:[{text:gptQuery}]}]
    }})
    const movieList = response?.data?.candidates[0]?.content?.parts[0].text.split(',')    
    console.log(movieList);
        
    const promiseArray = movieList.map(movie=>searchMovieTmdb(movie))
    const tmdbResults = await Promise.all(promiseArray)
    // const json = await data.json()
    console.log(tmdbResults);
     
}
    
  return (
    <div className='p-[10%] border '>
        
        <form className='  bg-black grid grid-cols-12 justify-center items-center' onSubmit={(e)=>e.preventDefault()} >
        <input
        ref={inputValue}
        type='text'
        className='col-span-9 p-4 m-4 text-black cols-span-9 rounded-lg'
        placeholder= {lang[langKey].input}
        />
        <button onClick={handleGPTSearchClick}  className='col-span-3 mr-3 py-4 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar
