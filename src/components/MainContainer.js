import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
import Shimmer from "./Shimmer";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return <Shimmer />;

  // Helper to pick a random movie
  const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  };

  const movie = getRandomMovie(movies);

  return (
    <div className="relative min-h-screen">
      {/* Video Title */}
      <VideoTitle props={movie} />

      {/* Video Background */}
      <VideoBg movieID={movie.id} />
    </div>
  );
};

export default MainContainer;
