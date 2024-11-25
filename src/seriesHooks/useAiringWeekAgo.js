import { API_Options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { nowReleasedWeeklySeries } from '../utils/movieSlice'
import { useEffect } from 'react'

const useAiringWeekAgo = () => {

    const dispatch = useDispatch()
  const fetchingDetails = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US', API_Options)

      const json = await data.json()
      dispatch(nowReleasedWeeklySeries(json.results))
      
       

  }

  useEffect(()=>{
    fetchingDetails()
  },[])

}

export default useAiringWeekAgo;
