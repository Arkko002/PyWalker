import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import Job from "../models/job";

const initialState: Array<Job> = localStorage.getItem("jobs") ? JSON.parse(localStorage.getItem("jobs") as string) : Array<Job>();

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      state.push(action.payload);
    },
    removeJob: (state, action: PayloadAction<Job>) => {
      state = state.filter(x => x !== action.payload);
    },
    updateJob: (state, action: PayloadAction<Job>) => {
      //TODO All the properties
      let jobIndex = state.findIndex(x => x.name === action.payload.name);
      state[jobIndex].name = action.payload.name;
    }
  }
});

export const {addJob, removeJob, updateJob} = jobsSlice.actions;

export default jobsSlice.reducer;

