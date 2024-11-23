import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        nowPopularMovies:null,
        nowUpcomingMovies:null,
        tvSeries:null,
        topRatedMovies:null,
        onTheAirSeries:null
    },
    reducers: {
      addNowPlayingMovies: (state,action)=> {
          state.nowPlayingMovies = action.payload
      },
      trailerVideo: (state,action)=> {
      state.trailerVideo= action.payload
      },
      nowPopularMovies: (state,action)=> {
        state.nowPopularMovies= action.payload
      },
      nowUpcomingMovies: (state,action)=> {
        state.nowUpcomingMovies = action.payload
      },
      tvSeries: (state,action)=> {
        state.tvSeries = action.payload
      },
      topRatedMovies: (state,action)=> {
       state.topRatedMovies = action.payload
      },
      seriesOnAir:(state,action)=> {
        state.onTheAirSeries = action.payload
      }
      

    }
})

export const {addNowPlayingMovies,trailerVideo,nowPopularMovies,nowUpcomingMovies,tvSeries,topRatedMovies,seriesOnAir} = movieSlice.actions
export default movieSlice.reducer