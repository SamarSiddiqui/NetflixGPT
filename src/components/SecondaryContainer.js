import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=> {
    const movies = useSelector((store)=>store.movies)

    
return (
    <div className=" bg-black">
        <div className="bg-transparent  -mt-72 relative z-30 ">
        {/* -mt-60 - relative z-30 */}
        <MovieList title={"Upcoming Movies"} movies={movies?.nowUpcomingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.nowPopularMovies}/>
        <MovieList title={"Top Rated Tv Series"} movies={movies?.tvSeries}/>
        <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies}/>
        <MovieList title={"Sci-Fi"} movies={movies?.nowPlayingMovies}/>
            
      </div>
   </div>
)
}

export default SecondaryContainer;