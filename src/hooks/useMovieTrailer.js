import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { API_Options } from "../utils/constants"
import { trailerVideo } from "../utils/movieSlice"

const useMovieTrailer = (movieID)=>{
   
    const dispatch = useDispatch()
    const trailerVideos = useSelector((store)=>store?.movies?.trailerVideo)
    
    const getMovieVideos = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieID + '/videos?language=en-US', API_Options)
        const json = await data.json()
        
        const fileteredVideo = json?.results.filter((video)=>video.type==="Trailer")
        
        const trailer = fileteredVideo.length?fileteredVideo[0]:json.results[0]
        dispatch(trailerVideo(trailer.key))
    }
    
       useEffect (()=>{
        !trailerVideos && getMovieVideos()
       },[])
}

export default useMovieTrailer;