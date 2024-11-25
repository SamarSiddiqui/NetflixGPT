import React, { useEffect } from 'react'
import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { nowPopularSeries } from '../utils/movieSlice'

const usePopularSeries = () => {

    const dispatch = useDispatch()
 const fethcingDetails = async()=> {
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', API_Options)
   const json =  await data.json()
   dispatch(nowPopularSeries(json.results))

 }


 useEffect(()=>{
    fethcingDetails()
 },[])
}

export default usePopularSeries
