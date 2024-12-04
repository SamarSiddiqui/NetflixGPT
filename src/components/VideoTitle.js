import React from 'react'

const VideoTitle = ({props}) => {
    let {original_title,overview} = props
    
  return (
    <div className='h-[100%] aspect-video pt-[27%] top-0 z-40 px-20 absolute text-white bg-gradient-to-t from-black   '>
    <h1 className='font-extrabold text-4xl'>{original_title}</h1>
      <p className='w-1/2'>{overview}</p>
      <div>
    <button className=' p-2 px-3 bg-red-700 m-2 rounded-md '>▶️ Play Now</button>
    <button className=' p-2 px-3 bg-gray-300/40 m-2 rounded-md'>More Info</button>
     
      </div>
    </div>
  )
}

export default VideoTitle
