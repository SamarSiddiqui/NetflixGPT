import { createSlice } from "@reduxjs/toolkit";

const gptMovieSuggestion = createSlice({
    name:"gptMovies",
    initialState:{
        gptMoviesResults:null
    },
    reducers:{
        gptSearchResults:(state,action)=>{
           state.gptMoviesResults = action.payload
        }
    }
})

export const {gptSearchResults} = gptMovieSuggestion.actions
export default gptMovieSuggestion.reducer