import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import { coursesSlice } from "./coursesSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    courses: coursesSlice.reducer,
  }
});
