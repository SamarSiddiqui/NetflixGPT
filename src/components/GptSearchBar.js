import React from 'react'
import { Netflix_Bg } from '../utils/constants'
import lang from '../utils/language'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
  const langKey = useSelector((store)=>store.lang.lang)
 
    
  return (
    <div className='p-[10%] border '>
        
        <form className='  bg-black grid grid-cols-12 justify-center items-center'>
        <input
        type='text'
        className='col-span-9 p-4 m-4 text-black cols-span-9 rounded-lg'
        placeholder= {lang[langKey].input}
        />
        <button className='col-span-3 mr-3 py-4 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar
