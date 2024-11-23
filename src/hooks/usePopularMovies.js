import { useEffect } from 'react'
import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { nowPopularMovies } from '../utils/movieSlice'

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = useSelector((store)=>store?.movies?.nowPopularMovies)

    
    const fetchingPopularMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_Options)

    const json = await data.json()
    
    dispatch(nowPopularMovies(json.results))
    
     
}

  useEffect(()=>{
    !popularMovies &&
    fetchingPopularMovies()
  },[])
}

export default usePopularMovies
