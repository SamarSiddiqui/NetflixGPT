import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=> {
    const movies = useSelector((store)=>store.movies)
return (
    <div className=" bg-black">
        <div className="bg-transparent -mt-60 - relative z-30">

        <MovieList title={"Upcoming Movies"} movies={movies?.nowUpcomingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.nowPopularMovies}/>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Sci-Fi"} movies={movies?.nowPlayingMovies}/>
            
      </div>
   </div>
)
}

export default SecondaryContainer;