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

export const fetchWhyStudyAbroad = createAsyncThunk("fetchWhyStudyAbroad", (params) => {
    return get(params);
});
export const fetchPageWhyStudyAbroad = createAsyncThunk("fetchPageWhyStudyAbroad", (params) => {
    return get(params);
});
export const fetchWhyStudyAbroadDetails = createAsyncThunk(
    "fetchWhyStudyAbroadDetails",
    (params) => {
        return get(params);
    }
);

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
    name: "universityRanking",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchWhyStudyAbroad.pending, (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
        });
        builder.addCase(fetchWhyStudyAbroad.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = "";
        });
        builder.addCase(fetchWhyStudyAbroad.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error;
        });
        builder.addCase(fetchPageWhyStudyAbroad.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchPageWhyStudyAbroad.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPageWhyStudyAbroad.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchWhyStudyAbroadDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchWhyStudyAbroadDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchWhyStudyAbroadDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    },
});

export default postSlice.reducer;
