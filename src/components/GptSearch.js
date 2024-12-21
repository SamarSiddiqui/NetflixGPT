import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMoviePage from './GptMoviePage';

const GptSearch = () => {
  return (
    <div className='min-h-screen   text-white relative z-10   bg-gradient-to-b from-gray-800 to-black'>
      <GptSearchBar/>
      <GptMoviePage/>
      
    </div>
  )
}

export default GptSearch;
