import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMoviePage from './GptMoviePage';

const GptSearch = () => {
  return (
    <div className='text-white relative z-10  bg-gradient-to-b from-gray-900 to-black'>
      <GptSearchBar/>
      <GptMoviePage/>
      
    </div>
  )
}

export default GptSearch;
