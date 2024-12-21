import React from "react";
import Banner from "./Banner";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useOnTheAirSereis from "../seriesHooks/useOnTheAirSereis";
import useAiringToday from "../seriesHooks/useAiringToday";
import useSeries from "../hooks/useSeries";
import useReleasedTodaySeries from "../seriesHooks/useReleasedToday";
import usePopularSeries from "../seriesHooks/usePopularSeries";
import Shimmer from "./Shimmer";

const TvSeries = () => {
  useOnTheAirSereis();
  useAiringToday();
  useReleasedTodaySeries();
  useSeries();
  usePopularSeries();

  const {tvSeries,
    nowPopularSeries,
    nowReleasedTodaySeries,
    nowAiringTodaySeries} = useSelector((store) => store.movies);
  // TopRated
  if (!tvSeries || tvSeries.length === 0 || !nowPopularSeries || nowPopularSeries.length) {
    return <Shimmer />;
  }
  return (
    <div className="text-white ">
      <Banner details={tvSeries} />
      <div className=" h-5"></div>
      <div className="w-[95%] m-auto">
        <div className="">
          <MovieList
            title={"Trending TV Hits"}
            movies={nowPopularSeries}
          />
          <MovieList
            title={"Just Released Shows"}
            movies={nowReleasedTodaySeries}
          />
          <MovieList
            title={"Critics' Choice Series"}
            movies={tvSeries}
          />
          <MovieList
            title={"Fresh Episodes Dropping"}
            movies={nowAiringTodaySeries}
          />
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
