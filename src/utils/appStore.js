import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'
import langReducer from './configlangSlice'
import gptMovieReducer from './gptMovieSuggestion'

const appStore = configureStore({
    reducer:{
    user: userReducer,
    movies: movieReducer,
    gptMovies:gptMovieReducer,
    gpt: gptReducer,
    lang:langReducer,
    }
})

 
export default appStore;