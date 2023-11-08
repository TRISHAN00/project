import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchUniversityRanking = createAsyncThunk("fetchUniversityRanking", (params, {dispatch}) => {
    return get(params);
});
export const fetchUniversityRankingPage = createAsyncThunk("fetchUniversityRankingPage", (params) => {
    return get(params);
});
export const fetchUniversityRankingDetails = createAsyncThunk(
    "fetchUniversityRankingDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'universityRanking',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUniversityRanking.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchUniversityRanking.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchUniversityRanking.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchUniversityRankingPage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchUniversityRankingPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUniversityRankingPage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchUniversityRankingDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchUniversityRankingDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchUniversityRankingDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
