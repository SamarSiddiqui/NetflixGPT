import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/myListSlice';

const BannerDetails = ({ details }) => {
  const myList = useSelector((store) => store?.mylist?.addedItems);
  const dispatch = useDispatch();

  const {
    name,
    overview,
    vote_average: voteAverage,
    first_air_date: firstAirDate,
    original_title: originalTitle,
    release_date: releaseDate,
    media_type: mediaType,
    id,
  } = details || {};

  const ratings = parseFloat(voteAverage || 0);
  const formattedRating = ratings.toFixed(2);

  // Movie duplicacy logic
  const handleAddItem = () => {
    const isMovieInList = myList.some((movie) => movie.id === id);
    if (!isMovieInList) {
      dispatch(addItem(details));
    }
  };

  return (
    <div className="absolute mb-10 top-44 left-20 w-1/2 cursor-default smallerTab:left-10 largerMobile:top-32">
      <div className="text-white smallerTab:w-[80vw]">
        {/* Title */}
        <div className="flex items-center text-[clamp(30px,5vw,50px)]">
          <h1
            style={{ textShadow: '4px 3px 6px black' }}
            className="text-white font-bold hover:underline"
          >
            {originalTitle || name}
            <i className="ml-5 text-red-500 fa-solid fa-play"></i>
          </h1>
        </div>

        {/* Release Details */}
        <div className="flex items-center">
          <p className="bg-gray-300/30 text-center py-1 px-2 font-bold my-8 rounded-md text-[clamp(13px,1.5vw,20px)] whitespace-nowrap">
            Released on: {releaseDate || firstAirDate}
          </p>
          <p className="largerMobile:hidden block font-extralight border border-gray-400 rounded-md mx-3 py-1 px-2">
            HD
          </p>
          <p className="largerMobile:hidden block font-extralight border border-gray-400 rounded-md mx-3 py-1 px-2">
            {formattedRating}
          </p>
          {mediaType && (
            <p className="largerMobile:hidden block font-extralight border border-gray-400 rounded-md mx-3 py-1 px-2">
              {mediaType}
            </p>
          )}
          <p>
            <i
              onClick={handleAddItem}
              className="fa-solid fa-plus bg-gray-200/50 rounded-full p-2.5 ml-3 cursor-pointer hover:scale-[1.05] smallerTab:p-1.5"
            ></i>
          </p>
        </div>

        {/* Overview */}
        <div className="text-[clamp(13px,1.5vw,20px)]">
          <div className="bg-gray-300/30 text-white rounded-md p-3 pb-3 largerMobile:w-[100%] smallerTab:w-[70vw]">
            <p className="line-clamp-4 smallerTab:line-clamp-6">{overview}</p>
          </div>

          {/* Buttons */}
          <div className="mt-7 font-bold text-lg smallerTab:text-sm">
            <button className="p-2 px-3 text-black bg-gray-300/50 rounded-md hover:scale-[1.03] hover:bg-gray-300/80">
              <i className="fa-solid fa-play mr-1"></i> Play Now
            </button>
            <button className="p-2 px-3 text-white bg-gray-500/50 mx-5 rounded-md hover:scale-[1.03] hover:bg-gray-500/100">
              <i className="fa-solid fa-circle-info text-white mr-2"></i> More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
