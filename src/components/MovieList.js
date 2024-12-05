import MovieCard from "./MovieCard";


const MovieList = ({title,movies})=> {
  
    
    
  return (
     <div className= "relative">
        <div className="py-2">
    <h1 className="font-bold  text-2xl text-gray-200">{title}</h1>

        </div>
    <div className="movielist">
    {  movies?.map((movie)=>(
     <MovieCard key={movie.id} movies={movies} movieName={movie?.original_title|| movie?.original_name}  posterPath={movie?.backdrop_path} overview={movie?.overview} ratings={movie?.vote_average} movie={movie}/>            
    ))}         
        </div>
    </div>
)
}

export default MovieList;