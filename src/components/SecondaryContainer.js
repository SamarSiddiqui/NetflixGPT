import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // Configuration for the sections to be rendered
  const sections = [
    { title: "Fresh on Air", movies: movies?.nowOnTheAirSeries },
    { title: "What's Next?", movies: movies?.nowUpcomingMovies },
    { title: "Fan Favorites", movies: movies?.nowPopularMovies },
    { title: "Binge-Worthy Gems", movies: movies?.tvSeries },
    { title: "Cinematic Masterpieces", movies: movies?.topRatedMovies },
    { title: "Screening Right Now", movies: movies?.nowPlayingMovies },
  ];

  return (
    <div className=" mt-5 bg-gradient-to-b from-black/90  to-black  border-red-500  overflow-visible w-[95%] m-auto pt-1 smallerTab:mt-10">
      <div className="  bg-balck relative">
        {sections.map(
          (section, index) =>
            section.movies?.length > 0 && (
              <MovieList
                key={index}
                title={section.title}
                movies={section.movies}
              />
            )
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
