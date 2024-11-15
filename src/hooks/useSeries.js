import { useEffect } from "react"
import { API_Options } from "../utils/constants"
import { useDispatch } from "react-redux"
import { tvSeries } from "../utils/movieSlice"

const useSeries =  ()=> {
    const dispatch = useDispatch()
    
    const getSeries = async ()=> {
     const data = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', API_Options)

     const json = await data.json()
     
    dispatch(tvSeries(json.results))
     
    }

    useEffect(()=>{
        getSeries()
    },[])
}

export default useSeries;