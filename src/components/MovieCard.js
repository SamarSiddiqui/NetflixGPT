import React from "react";
import { IMG_CDN } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/myListSlice";

const MovieCard = ({
  backdropPath,
  movieName,
  overview,
  ratings,
  movie,
  movieId,
  posterPath,
}) => {

  
  const myList = useSelector((store) => store?.mylist?.addedItems);
  const dispatch = useDispatch();

  if (!backdropPath && !movieName) return null;

  //Movie Duplicacy Logic
  const handleAddItem = () => {
    const isMovieInList = myList.some((movie) => movie.id === movieId);
    if (!isMovieInList) {
      dispatch(addItem(movie));
    }
  };
  // Get movie image source
  const getMovieImage = () => {
    return backdropPath ? IMG_CDN + backdropPath : IMG_CDN + posterPath;
  };
  return (
    <div className="moviecard text-white cursor-default smallerTab:w-56  smallerTab:h-36">
      <img
        className="poster-image"
        src={getMovieImage()}
        alt={`Poster of ${movieName}`}
      />

      {/* Movie Content */}
      <div className="content-box ">
        <div className="details  smallerTab:bottom-2">
          <div className="flex items-center justify-between w-[100%]">
            <h1 className="text-2xl smallerTab:text-[20px] smallerTab:font-bold smallerTab:leading-6">{movieName}</h1>
            <div>
              <i
                onClick={handleAddItem}
                className="fa-solid fa-plus  text-base border rounded-full px-2 mx-3 mt-2 py-1 cursor-pointer hover:scale-[1.05] smallerTab:mx-3 smallerTab:text-[10px] smallerTab:px-1.56 smallerTab:py-0"
              ></i>
            </div>
          </div>
          {/* Rating */}
          <h1 className="smallerTab:hidden block text-xl mb-1 ">
            Rating: {ratings}
          </h1>
          {/* Overview */}
          <p class="description smallerTab:text-sm">
            {overview || "No Overview Present"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
