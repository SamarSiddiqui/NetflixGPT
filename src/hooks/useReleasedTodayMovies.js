import  { useEffect } from 'react'
import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { nowReleasedTodayMovies } from '../utils/movieSlice'

const useReleasedTodayMovies = () => {
    const dispatch = useDispatch()
  const fethcingDetails = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_Options)
const json = await data.json()
dispatch(nowReleasedTodayMovies(json.results))
  } 

  useEffect(()=>{
    fethcingDetails()
  },[])
}

export default useReleasedTodayMovies;
