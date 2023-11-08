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

export const fetchFindUniversity = createAsyncThunk("fetchFindUniversity", (params) => {
    return get(params);
});
export const fetchPageFindUniversity = createAsyncThunk("fetchPageFindUniversity", (params) => {
    return get(params);
});
export const fetchFindUniversityDetails = createAsyncThunk(
    "fetchFindUniversityDetails",
    (params) => {
        return get(params);
    }
);

export const fetchFindUniversityBySlugDetails = createAsyncThunk(
    "fetchFindUniversityBySlugDetails",
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
        builder.addCase(fetchFindUniversity.pending, (state) => {
            state.loading = true;
            state.posts = [];
            state.error = "";
        });
        builder.addCase(fetchFindUniversity.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = "";
        });
        builder.addCase(fetchFindUniversity.rejected, (state, action) => {
            state.loading = false;
            state.posts = [];
            state.error = action.error;
        });
        builder.addCase(fetchPageFindUniversity.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchPageFindUniversity.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchPageFindUniversity.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchFindUniversityDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchFindUniversityDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchFindUniversityDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
        // builder.addCase(fetchFindUniversityBySlugDetails.pending, (state, action) => {
        //     state.detailLoading = true;
        //     state.detail = [];
        //     state.detailError = "";
        // });
        // builder.addCase(fetchFindUniversityBySlugDetails.fulfilled, (state, action) => {
        //     state.detailLoading = false;
        //     state.detail = action.payload;
        //     state.detailError = "";
        // });
        // builder.addCase(fetchFindUniversityBySlugDetails.rejected, (state, action) => {
        //     state.detailLoading = false;
        //     state.detail = [];
        //     state.detailError = action.error;
        // });
    },
});

export default postSlice.reducer;
