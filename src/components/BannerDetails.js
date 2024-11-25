import React from 'react'

const BannerDetails = (seriesDetails) => {

  let {name,overview,vote_average,first_air_date,original_title,release_date,media_type} = seriesDetails?.details
  
  return (
    <div className='absolute top-44  left-16 w-1/2  '>
      
     <div className=''>
        {/* Title */}
     <div className='flex items-center' > 
      <h1 style={{ textShadow: '4px 3px 6px black' }} className='text-white text-6xl font-bold hover:underline cursor-pointer '>{original_title||name} </h1>    
     <span className='ml-5 text-red-500'><i class="fa-solid fa-play text-5xl"></i></span>
     </div>
     {/* Released Details */}
     <div className='flex items-center ' >
     <p className='bg-gray-300/20  text-center py-1 px-2 text-2xl font-bold my-8 rounded-md '>Released on: {release_date||first_air_date}</p>
     <p className='text-xl font-extralight text-white border border-gray-400 rounded-md mx-3 py-1 px-2'>HD</p>
     <p className='text-xl font-extralight text-white border border-gray-400 rounded-md mx-3 py-1 px-2'>{vote_average}</p>
    { media_type&& <p className='text-xl font-extralight text-white border border-gray-400 rounded-md mx-3 py-1 px-2'>{media_type}</p>}
     
     </div>
     {/* Overview */}
     <div className='bg-gray-300/20 font-bold rounded-md p-3 my-10 w-10/12'>{overview}</div>
      </div>
      {/* Buttons */}
      <button className='bg-white px-3 font-bold text-xl py-2 text-black rounded-md cursor-pointer hover:bg-gray-100 hover:scale-105'>
      <i class="fa-solid fa-play mx-3"></i>
      Play
      </button>
      <button className='bg-white/30 px-3 font-bold text-xl py-2 text-white rounded-md ml-5 cursor-pointer hover:bg-white/40 hover:scale-105'>
      <i class="fa-solid fa-circle-info text-white mx-3"></i>
      More Info</button>
    </div>
  )
}

export default BannerDetails
