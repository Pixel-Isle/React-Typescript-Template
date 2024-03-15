import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./appState";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCounter = (state: AppState) => state.counter.count;
export default counterSlice.reducer;
