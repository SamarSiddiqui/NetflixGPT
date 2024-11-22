import React from 'react'

import Banner from './Banner'
import { useSelector } from 'react-redux';
import useSeries from '../hooks/useSeries';


const TvSeries = () => {
  useSeries()
  
  const state = useSelector((store)=>store.movies?.tvSeries)
  if (!state || state.length === 0) {
    // Show a loading spinner or placeholder while data is loading
    return <div className="text-white">Loading...</div>;
  }
  return (
    <div className='text-white'>
     <Banner details={state}/>

      <h1>Hello from Tv Shows</h1>
    </div>
  )
}

export default TvSeries
