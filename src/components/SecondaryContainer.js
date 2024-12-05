import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=> {
    const movies = useSelector((store)=>store.movies)
    
  
   
  
    
return ( 
   <div className=" bg-gradient-to-b from-black/90 -mt-40 to-black  relative z-50 overflow-visible w-[95%] m-auto pt-1">
     <div className=" bg-balck relative z-30 ">
        {/* -mt-60 - relative z-30 */}
        <MovieList  title={"Fresh on Air"} movies={movies?.nowOnTheAirSeries}/>
        <MovieList  title={"What's Next?"} movies={movies?.nowUpcomingMovies}/>
        <MovieList title={"Fan Favorites"} movies={movies?.nowPopularMovies}/>
        <MovieList title={"Binge-Worthy Gems"} movies={movies?.tvSeries}/>
        <MovieList title={"Cinematic Masterpieces"} movies={movies?.topRatedMovies}/>
        <MovieList title={"Screening Right Now"} movies={movies?.nowPlayingMovies}/>
            
      </div>
   </div>
)
}

export default SecondaryContainer;