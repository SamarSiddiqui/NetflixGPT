import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { nowReleasedTodaySeries } from "../utils/movieSlice";

const useReleasedTodaySeries = () => {
  const dispatch = useDispatch();
  const fetchingDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_Options
    );

    const json = await data.json();
    dispatch(nowReleasedTodaySeries(json.results));
  };

  useEffect(() => {
    fetchingDetails();
  }, []);
};

export default useReleasedTodaySeries;
