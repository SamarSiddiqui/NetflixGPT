import React from 'react';
import useNowPlayingMovies from '../hooks/useNowPalyingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/usetopRated';
import useAiringToday from '../seriesHooks/useAiringToday.js';
import useOnTheAirSereis from '../seriesHooks/useOnTheAirSereis.js';
import useSeries from '../hooks/useSeries.js';

const Browse = () => {
  // Initialize hooks for fetching data
  useAiringToday();
  useOnTheAirSereis();
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useSeries();
  useTopRatedMovies();

  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
