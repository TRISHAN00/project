import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../network/axiosServices";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const fetchHome = createAsyncThunk(
  "fetchHome",
  (params, { dispatch }) => {
    return get(params);
  }
);

const postSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHome.pending, (state) => {
      state.loading = true;
      state.posts = [];
      state.error = "";
    });
    builder.addCase(fetchHome.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchHome.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error;
    });
  },
});

export default postSlice.reducer;
