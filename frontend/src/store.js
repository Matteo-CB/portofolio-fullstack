import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import dataReducer from "./dataSlice";
import filterReducer from "./filterSlice";
import adminReducer from "./adminSlice";
import nameReducer from "./nameSlice";

const rootReducer = {
  theme: themeReducer,
  data: dataReducer,
  filter: filterReducer,
  admin: adminReducer,
  name: nameReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
