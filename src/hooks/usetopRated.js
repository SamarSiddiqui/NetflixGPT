import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { topRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const nowTopRated = useSelector((store) => store?.movies?.topRatedMovies);
  const fetchingTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_Options
    );

    const json = await data.json();
    dispatch(topRatedMovies(json.results));
  };

  useEffect(() => {
    !nowTopRated && fetchingTopRated();
  }, []);
};

export default useTopRatedMovies;
