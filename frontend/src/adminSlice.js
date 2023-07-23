import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: false,
  reducers: {
    toggleAdmin: (state, payload) => payload.payload,
  },
});

export const { toggleAdmin } = adminSlice.actions;
export default adminSlice.reducer;
