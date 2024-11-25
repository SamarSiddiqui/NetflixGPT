import MovieCard from "./MovieCard";


const MovieList = ({title,movies})=> {
  
    
    
  return (
     <div className= "movieList border border-yellow-400 ">
        <h1 className="font-bold text-2xl mt-2 mb-0.5 ml-1 text-gray-200">{title}</h1>
          {/* <div className="  movieList"> */}
        {
                
            movies?.map((movie)=>(
                    <MovieCard key={movie.id} movies={movies} movieName={movies?.title}posterPath={movie?.backdrop_path}/>
                    
                   
                ))
            }
                {/* </div> */}
           
          
        </div>
    )
}

export default MovieList;