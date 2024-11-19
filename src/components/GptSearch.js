import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMoviePage from './GptMoviePage';
import { Netflix_Bg } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className='text-white relative z-10'>
        <div className="fixed bgLogo -z-10">
       <img alt="bg-logo"  src={Netflix_Bg}/>
   </div>
      <GptSearchBar/>
      <GptMoviePage/>
    </div>
  )
}

export default GptSearch;
