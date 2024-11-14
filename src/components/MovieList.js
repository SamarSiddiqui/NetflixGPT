import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({title,movies})=> {
    
   

    return (
        <div className= "">
                <h1 className="font-bold text-2xl mt-2 mb-0.5 ml-1 text-white">{title}</h1>
                <div className="  flex overflow-x-scroll no-scrollbar">
            {
                
                movies?.map((movie)=>(
                    <MovieCard key={movie.id} movies={movies} posterPath={movie?.backdrop_path}/>
                    
                   
                ))
            }
                </div>
           
          
        </div>
    )
}

export default MovieList;