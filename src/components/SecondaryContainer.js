import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=> {
    const movies = useSelector((store)=>store.movies)
    
  
   
  
    
return ( 
   <div className=" bg-gradient-to-b from-black/90 -mt-52 to-black  relative z-50 overflow-visible w-[99%] m-auto pt-1">
     <div className=" bg-balck relative z-30 ">
        {/* -mt-60 - relative z-30 */}
        <MovieList  movies={movies?.nowUpcomingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.nowPopularMovies}/>
        <MovieList title={"Top Rated Tv Series"} movies={movies?.tvSeries}/>
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
        <MovieList title={"Sci-Fi"} movies={movies?.nowPlayingMovies}/>
            
      </div>
   </div>
)
}

export default SecondaryContainer;