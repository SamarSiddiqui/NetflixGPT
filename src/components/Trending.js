import React from "react";
import Banner from "./Banner";
import useAllTrending from "../hooks/useAllTrending";
import { useSelector } from "react-redux";
import useReleasedTodayMovies from "../hooks/useReleasedTodayMovies";
import useReleasedTodaySeries from "../seriesHooks/useReleasedToday";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const Trending = () => {
  useAllTrending();
  useReleasedTodayMovies();
  useReleasedTodaySeries();

  const {nowTrendingAll, nowReleasedTodayMovies, nowReleasedTodaySeries} = useSelector((store) => store.movies);

  if (!nowTrendingAll || nowTrendingAll.length === 0) {
    return <Shimmer />;
  }
  
  return (
    <div>
      <Banner details={nowTrendingAll} />

      <div className="w-[95%] m-auto">
        {/* ReleasedMovies */}
        <MovieList
          title={"Hot Off the Reel"}
          movies={nowReleasedTodayMovies}
        />
        {/* ReleasedTvSeries */}
        <MovieList
          title={"Freshly Dropped Shows"}
          movies={nowReleasedTodaySeries}
        />
      </div>
    </div>
  );
};

export default Trending;
