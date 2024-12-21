import React from "react";
import Banner from "./Banner";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/usetopRated";
import MovieList from "./MovieList";
import useReleasedTodayMovies from "../hooks/useReleasedTodayMovies";
import Shimmer from "./Shimmer";

const Movies = () => {
  // Fetch data using hooks
  const isLoadingToday = useReleasedTodayMovies();
  const isLoadingUpcoming = useUpcomingMovies();
  const isLoadingPopular = usePopularMovies();
  const isLoadingTopRated = useTopRatedMovies();

  // Select movie data from Redux store
  const {
    nowReleasedTodayMovies,
    nowUpcomingMovies,
    topRatedMovies,
    nowPopularMovies,
  } = useSelector((store) => store.movies || {});
  
  if (
    isLoadingToday ||
    isLoadingUpcoming ||
    isLoadingPopular ||
    isLoadingTopRated ||
    !topRatedMovies
  ) {
    // Show a loading spinner or placeholder while data is loading
    return <Shimmer />;
  }
  return (
    <div>
      <Banner details={topRatedMovies} />
      <div className=" h-5"></div>
      <div className=" w-[95%] m-auto">
        <MovieList
          title={"Fresh Off the Reel"}
          movies={nowReleasedTodayMovies}
        />
        <MovieList title={"Movies on the Horizon"} movies={nowUpcomingMovies} />
        <MovieList title={"Critics' Favorites"} movies={topRatedMovies} />
        <MovieList title={"Box Office Buzz"} movies={nowPopularMovies} />
      </div>
    </div>
  );
};

export default Movies;
