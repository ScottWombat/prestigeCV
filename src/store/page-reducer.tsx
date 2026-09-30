import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
export const pageSlice = createSlice({
  name: "page",
  initialState: { value: 1 },
  reducers: {
    next: (state) => {
      state.value = state.value + 1;
    },
    back: (state) => {
      state.value = state.value - 1;
    },
  },
});
export const { back } = pageSlice.actions;
export const { next } = pageSlice.actions;
export default pageSlice.reducer;