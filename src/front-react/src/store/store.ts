import {configureStore} from "@reduxjs/toolkit";
import jobsReducer from "./jobs";
import dropboxReducer from "./dropbox";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    dropbox: dropboxReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
