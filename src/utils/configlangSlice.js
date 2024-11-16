import { createSlice } from "@reduxjs/toolkit";

const configLang = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
          state.lang = action.payload
        }
    }
})

export const {changeLanguage}= configLang.actions
export default configLang.reducer