import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { tvSeries } from "../utils/movieSlice";

const useSeries = () => {
  const dispatch = useDispatch();
  const nowTvSeries = useSelector((store) => store?.movies?.tvSeries);

  const getSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_Options
    );

    const json = await data.json();

    dispatch(tvSeries(json.results));
  };

  useEffect(() => {
    !nowTvSeries && getSeries();
  }, []);
};

export default useSeries;
