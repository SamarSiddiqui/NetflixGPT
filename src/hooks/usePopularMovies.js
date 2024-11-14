import React, { useEffect } from 'react'
import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { nowPopularMovies } from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const fetchingPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Options)

    const json = await data.json()
    console.log(json.results);
    
    dispatch(nowPopularMovies(json.results))
    
     
}

  useEffect(()=>{
    fetchingPopularMovies()
  },[])
}

export default usePopularMovies
