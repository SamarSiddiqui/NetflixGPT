import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'
import gptMovieReducer from './gptMovieSuggestion'
import myListReducer from './myListSlice'

const appStore = configureStore({
    reducer:{
    user: userReducer,
    movies: movieReducer,
    gptMovies:gptMovieReducer,
    gpt: gptReducer,
    mylist: myListReducer,
    }
})

 
export default appStore;