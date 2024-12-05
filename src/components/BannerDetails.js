import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/myListSlice'

const BannerDetails = (seriesDetails) => {

  let {name,overview,vote_average,first_air_date,original_title,release_date,media_type} = seriesDetails?.details
  const dispatch = useDispatch()
  let ratings = parseFloat(vote_average)
  let result = ratings.toFixed(2)
   
  let handleAddItem = () => {  
   dispatch(addItem(seriesDetails?.details))
   
  }
  return (
    <div className='absolute top-44  left-20 w-1/2 cursor-default'>
      
     <div className='text-white '>
        {/* Title */}
     <div className='flex items-center' > 
      <h1 style={{ textShadow: '4px 3px 6px black' }} className='text-white text-6xl font-bold hover:underline'>{original_title||name}   
     <i class="ml-5 text-red-500 fa-solid fa-play text-5xl"></i>
     </h1> 
     </div>
     {/* Released Details */}
     <div className='flex items-center ' >
     <p className='bg-gray-300/30  text-center py-1 px-2 text-2xl font-bold my-8 rounded-md '>Released on: {release_date||first_air_date}</p>
     <p className='text-xl font-extralight  border border-gray-400 rounded-md mx-3 py-1 px-2'>HD</p>
     <p className='text-xl font-extralight  border border-gray-400 rounded-md mx-3 py-1 px-2'>{result}</p>
    { media_type && <p className='text-xl font-extralight  border border-gray-400 rounded-md mx-3 py-1 px-2'>{media_type}</p>}
    <p><i onClick={handleAddItem} className="fa-solid fa-plus bg-gray-200/50 bg-gray-200 rounded-full p-2.5 ml-3 cursor-pointer hover:scale-[1.05]"></i></p>
     
     </div>
     {/* Overview */}
     <div className='bg-gray-300/30 text-white font-bold rounded-md p-3 my-3 w-10/12'>{overview}</div>
      </div>
      {/* Buttons */}
      <div className=' mt-7 font-bold'>
    <button className=' p-2 px-3 text-black bg-gray-300/50  rounded-md text-lg hover:scale-[1.03] hover:bg-gray-300/80 '><i class=" fa-solid fa-play mr-1"></i> Play Now</button>
    <button className='text-lg p-2 px-3 text-white  bg-gray-500/50 mx-5 rounded-md hover:scale-[1.03] hover:bg-gray-500/100 '><i class="fa-solid fa-circle-info text-white mr-2"></i>More Info</button>
     
      </div>
     
    </div>
  )
}

export default BannerDetails
