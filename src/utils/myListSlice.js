import { createSlice } from "@reduxjs/toolkit";

const myListSlice = createSlice({
  name: "mylist",
  initialState: {
    addedItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const exists = state.addedItems.some(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.addedItems.push(action.payload);
      }
    },
    clearList: (state) => {
      state.addedItems.length = 0;
    },
  },
});

export const { addItem, clearList } = myListSlice.actions;
export default myListSlice.reducer;
