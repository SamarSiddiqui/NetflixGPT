import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-black to-gray-900">
    <div className="relative flex items-center justify-center text-center">
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-gray-600 to-gray-300 animate-ping"></div>
      <div className="absolute w-20 h-20 rounded-full bg-gray-600 animate-spin"></div>
      <p className="relative text-white font-bold text-xl">Loading...</p>
    </div>
  </div>
  )
}

export default Shimmer
