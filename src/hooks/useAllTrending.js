import React, { useEffect } from 'react'
import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { nowTrendingAll } from '../utils/movieSlice'

const useAllTrending = () => {
  const dispatch = useDispatch()
  const fetchingDetails = async ()=> {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_Options)
  const json = await data.json()
   dispatch(nowTrendingAll(json.results))

  }  

 useEffect(()=>{
fetchingDetails()

 },[])
}

export default useAllTrending
