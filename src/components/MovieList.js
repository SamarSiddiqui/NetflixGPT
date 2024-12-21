import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="relative ">
      <div className="py-2 smallerTab:py-1">
        <h1 className="font-bold  text-2xl text-gray-200 smallerTab:text-lg">
          {title}
        </h1>
      </div>
      <div className="movielist">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            movies={movies}
            movieName={movie?.original_title || movie?.original_name}
            backdropPath={movie?.backdrop_path}
            posterPath={movie?.poster_path}
            overview={movie?.overview}
            ratings={movie?.vote_average}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
