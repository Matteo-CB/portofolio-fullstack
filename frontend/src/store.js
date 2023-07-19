import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import dataReducer from "./dataSlice";
import filterReducer from "./filterSlice";

const rootReducer = {
  theme: themeReducer,
  data: dataReducer, 
  filter: filterReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
