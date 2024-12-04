import MovieCard from "./MovieCard";


const MovieList = ({title,movies})=> {
  
    console.log(movies);
    
    
  return (
     <div className= "relative">
        
        <h1 className="font-bold text-2xl text-gray-200">{title}</h1>

       
        <div className="movielist">

        {  movies?.map((movie)=>(
            <MovieCard key={movie.id} movies={movies} movieName={movie?.original_title|| movie?.original_name}  posterPath={movie?.backdrop_path} overview={movie?.overview} ratings={movie?.vote_average}/>            
        ))
        }         
        </div>
    </div>
)
}

export default MovieList;