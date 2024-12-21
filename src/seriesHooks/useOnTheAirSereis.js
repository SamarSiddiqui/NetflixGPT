import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { nowOnAirSeries } from "../utils/movieSlice";

const useOnTheAirSereis = () => {
  const dispatch = useDispatch();

  const fetchingDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
      API_Options
    );

    const json = await data.json();
    dispatch(nowOnAirSeries(json?.results));
  };

  useEffect(() => {
    fetchingDetails();
  }, []);
};

export default useOnTheAirSereis;
