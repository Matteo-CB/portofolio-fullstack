import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    toggleFilter: (state, payload) => payload.payload
  },
});

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
