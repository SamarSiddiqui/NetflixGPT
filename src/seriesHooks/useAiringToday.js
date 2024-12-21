import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { nowAiringTodaySeries } from "../utils/movieSlice";

const useAiringToday = () => {
  const dispatch = useDispatch();
  const fetchingDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_Options
    );

    const json = await data.json();

    dispatch(nowAiringTodaySeries(json.results));
  };

  useEffect(() => {
    fetchingDetails();
  }, []);
};

export default useAiringToday;
