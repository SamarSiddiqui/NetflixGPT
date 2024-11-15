import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        toggleGpt: false
    },
    reducers:{
        toggleGptComponent: (state)=>{
            state.toggleGpt= !state.toggleGpt
        }
    }
})

export const {toggleGptComponent} = gptSlice.actions
export default gptSlice.reducer