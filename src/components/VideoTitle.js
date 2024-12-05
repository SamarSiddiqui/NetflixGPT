import React from 'react'

const VideoTitle = ({props}) => {
    let {original_title,overview} = props
    
  return (
    <div className='h-[100%] aspect-video pt-[27%] top-0 z-40  px-20 absolute text-white bg-gradient-to-t from-black cursor-default   '>
      <div>

    <h1 style={{ textShadow: '4px 3px 6px black' }}  className='font-extrabold text-6xl mb-3'>{original_title}</h1>
      <p className='w-1/2 text-lg '>{overview}</p>
      <div className=' mt-5 font-bold'>
    <button className=' p-2 px-3 text-black bg-gray-300/50  rounded-md text-lg hover:scale-[1.03] hover:bg-gray-300/80 '><i class=" fa-solid fa-play mr-1"></i> Play Now</button>
    <button className='text-lg p-2 px-3 bg-gray-500/50 mx-5 rounded-md hover:scale-[1.03] hover:bg-gray-500/100 '><i class="fa-solid fa-circle-info text-white mr-2"></i>More Info</button>
     
      </div>
      </div>
    </div>
  )
}

export default VideoTitle
