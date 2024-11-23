import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const seriesSlice = createSlice({
    name:"series",
    initialState:{
        airingToday:null,
    },
    reducers: {
        addAiringToday:(state,action)=> {
         state.airingToday = action.payload
        }
    }

})

export const {addAiringToday} = seriesSlice.actions
export default seriesSlice.reducer