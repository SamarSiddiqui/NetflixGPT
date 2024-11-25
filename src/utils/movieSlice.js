import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
      trailerVideo: null,
      nowTrendingAll:null,
      nowReleasedTodayMovies:null,
        nowPlayingMovies: null,
        nowPopularMovies:null,
        nowUpcomingMovies:null,
        topRatedMovies:null,
        tvSeries:null,
        nowPopularSeries:null,
        nowAiringTodaySeries:null,
        nowOnTheAirSeries:null,
        nowReleasedTodaySeries:null,
        
    },
    reducers: {
      nowTrendingAll:(state,action)=>{
        state.nowTrendingAll = action.payload
      },
      nowReleasedTodayMovies: (state,action)=> {
          state.nowReleasedTodayMovies = action.payload
      },
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
      nowOnAirSeries:(state,action)=> {
        state.nowOnTheAirSeries = action.payload
      },
      nowAiringTodaySeries:(state,action)=> {
        state.nowAiringTodaySeries = action.payload
       },
       nowReleasedTodaySeries:(state,action)=>{
        state.nowReleasedTodaySeries = action.payload
       },
       nowPopularSeries:(state,action)=> {
        state.nowPopularSeries = action.payload
       }
      

    }
})

export const {nowTrendingAll,nowReleasedTodayMovies,addNowPlayingMovies,trailerVideo,nowPopularMovies,nowUpcomingMovies,tvSeries,topRatedMovies,nowOnAirSeries,nowAiringTodaySeries,nowReleasedTodaySeries,nowPopularSeries} = movieSlice.actions
export default movieSlice.reducer