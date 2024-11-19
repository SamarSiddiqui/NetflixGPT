import { useDispatch, useSelector } from "react-redux"
import { nowUpcomingMovies } from "../utils/movieSlice"
import { useEffect } from "react"
import { API_Options } from '../utils/constants'


const useUpcomingMovies = ()=> {

    const dispatch = useDispatch()
    const upcomingMovies = useSelector((store)=>store?.movies?.nowUpcomingMovies)
    const getNowupcomingMovies = async ()=> {
      const data  = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_Options)

      const json = await data.json()
      dispatch(nowUpcomingMovies(json.results))
    }

    useEffect(()=>{
       !upcomingMovies && getNowupcomingMovies();
    },[])
}

export default useUpcomingMovies;