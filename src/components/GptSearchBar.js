import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { API_Options } from '../utils/constants';
import { gptSearchResults } from '../utils/gptMovieSuggestion';

const GptSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // New state for error messages
  const dispatch = useDispatch();

  const inputValue = useRef(null);
  const API_KEY = process.env.REACT_APP_GEMINI_KEY;

  // Function to search movie in TMDB
  const searchMovieTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_Options);

    const json = await data.json();

    return json.results;
  };

  const handleGPTSearchClick = async () => {
    setIsLoading(true); // Start shimmer effect
    setErrorMessage(null); // Clear previous errors

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${inputValue?.current?.value}. Only give me the names of 5 movies, comma separated like the example result given ahead. Example Result: Koi Mil Gaya, Don, Sholay, Endgame, Whiplash`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: gptQuery }] }],
        },
      });

      const movieList = response?.data?.candidates[0]?.content?.parts[0].text.split(',');
      const promiseArray = movieList.map((movie) => searchMovieTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(gptSearchResults({ movieNames: movieList, movieResults: tmdbResults }));
    } catch (error) {
      console.error('Error fetching GPT search results:', error);
      setErrorMessage("There was an error fetching movie recommendations. Please try again later.");
    } finally {
      setIsLoading(false); // Stop shimmer effect
    }
  };

  const clearSearchBar = () => {
    inputValue.current.value = '';
  };

  return (
    <div className="min-h-[90vh] flex flex-col w-[90%] m-auto justify-center">
      <div>
        <form
          className="text-center relative grid grid-cols-10 justify-center items-center smallerTab:block"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="col-span-8 relative flex items-center">
            <input
              ref={inputValue}
              type="text"
              className="text-[clamp(10px,3vw,20px)] italic w-[97%] p-4 m-4 text-white rounded-lg bg-gray-100/10"
              placeholder="Type in the vibes, we'll find the flicks!"
              aria-label="Movie search input"
            />
            <i
              onClick={clearSearchBar}
              className="fa-solid fa-xmark absolute right-8 cursor-pointer text-gray-100/70 hover:scale-[1.05] hover:text-white smallerTab:text-[12px]"
              aria-label="Clear search bar"
            ></i>
          </div>
          <button
            onClick={handleGPTSearchClick}
            className="col-span-2 mr-3 py-3.5 text-xl bg-red-800/70 text-white rounded-lg hover:bg-red-800 smallerTab:w-[50%] smallerTab:mr-0"
            aria-label="Search movies"
          >
            Search
          </button>
        </form>
        {isLoading && (
          <div className="flex justify-center">
            <img
              src="https://cdn.pixabay.com/animation/2024/04/02/07/57/07-57-40-974_512.gif"
              className="w-40 mt-10 largerMobile:w-20"
              alt="loader"
            />
          </div>
        )}
        {errorMessage && (
          <div className="text-red-500 mt-4 text-center">
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GptSearchBar;
