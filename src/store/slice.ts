import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./appState";

const initialState = {
  count: 0,
  mode: "dark",
};

const defaultSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { increment, decrement, toggleMode } = defaultSlice.actions;
export const selectCounter = (state: AppState) => state.default.count;
export const selectMode = (state: AppState) => state.default.mode;
export default defaultSlice.reducer;
