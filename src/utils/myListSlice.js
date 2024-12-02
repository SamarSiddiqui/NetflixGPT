import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
    name:'mylist',
    initialState:{
        addedItems: [],
    },
    reducers: {
        addItem: (state,action)=> {
            state.addedItems.push(action.payload)
        },
        clearList: (state)=>{
            state.addedItems.length=0
        }
    }
})

export const {addItem,clearList} = myListSlice.actions
export default myListSlice.reducer;