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
};

export const fetchDevelopingSkills = createAsyncThunk("fetchDevelopingSkills", (params) => {
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
    name: "fetchDevelopingSkills",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDevelopingSkills.pending, (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
        });
        builder.addCase(fetchDevelopingSkills.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = "";
        });
        builder.addCase(fetchDevelopingSkills.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error;
        });
    },
});

export default postSlice.reducer;
