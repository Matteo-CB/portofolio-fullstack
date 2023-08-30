import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: "sur mon portfolio",
  reducers: {
    toggleName: (state, payload) => payload.payload,
  },
});

export const { toggleName } = nameSlice.actions;
export default nameSlice.reducer;
