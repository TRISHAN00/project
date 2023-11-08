import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { get } from "../../network/axiosServices";

const initialState = {
    loading: false,
    posts: [],
    error: "",
    detail: [],
    detailLoading: false,
    detailError: "",
    page_data: [],
};

export const fetchHowToChooseACourse = createAsyncThunk("fetchHowToChooseACourse", (params) => {
    return get(params);
});

// export const fetchPosts = createAsyncThunk('posts/fetchAllPosts', () => {
//     return axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.data)
// })
//
// export const fetchPostDetail = createAsyncThunk('posts/fetchPostsDetail', (param) => {
//     return axios.get(`https://jsonplaceholder.typicode.com/posts/${param}`)
//         .then(response => response.data)
// })

const postSlice = createSlice({
    name: "reasonToChooseDoyen",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchHowToChooseACourse.pending, (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
        });
        builder.addCase(fetchHowToChooseACourse.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = "";
        });
        builder.addCase(fetchHowToChooseACourse.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error;
        });
    },
});

export default postSlice.reducer;
