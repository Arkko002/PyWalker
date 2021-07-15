import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DropboxState {
  code: string;
  loading: boolean;
  isAuthorized: boolean;
}

const initialState: DropboxState = localStorage.getItem("dropbox-auth") ? JSON.parse(localStorage.getItem("dropbox-auth") as string) : {code: "", isAuthorized: false}

export const dropboxSlice = createSlice({
  name: "dropbox",
  initialState,
  reducers: {
    authSuccess: (state, payload: PayloadAction<string>) => {
      state.code = payload.payload;
      state.loading = false;
      state.isAuthorized = true;
    },
    authFailure: (state, payload: PayloadAction<string>) => {
      state.code = payload.payload;
      state.loading = false;
      state.isAuthorized = false;
    },
    authLogout: (state) => {
      state.code = "";
      state.loading = false;
      state.isAuthorized = false;
    },
    loading: (state) => {
      state.loading = true;
    }
  }
});

export const {authSuccess, authFailure, authLogout} = dropboxSlice.actions;

export default dropboxSlice.reducer;
