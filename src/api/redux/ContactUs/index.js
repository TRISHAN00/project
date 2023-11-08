import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {get, post} from "../../network/axiosServices";

const initialState = {
    loading: false,
    posts: [],
    error: "",
    detail: [],
    detailLoading: false,
    detailError: "",
    page_data: [],
};

export const fetchContactUs = createAsyncThunk("fetchContactUs", (params) => {
    return get(params);
});
export const postForm = createAsyncThunk("contactForm", (params) => {
    return post(params);
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
    name: "contactUs",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchContactUs.pending, (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
        });
        builder.addCase(fetchContactUs.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = "";
        });
        builder.addCase(fetchContactUs.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error;
        });

        //-- post
        builder.addCase(postForm.pending, (state) => {
            state.loading = true;
            state.success = [];
            state.error = "";
        });
        builder.addCase(postForm.fulfilled, (state, action) => {
            state.loading = false;
            state.success = action.payload.message;
            state.error = "";

        });
        builder.addCase(postForm.rejected, (state, action) => {
            state.loading = false;
            state.success = '';
            state.error = action.error;

        });
    },
});

export default postSlice.reducer;
