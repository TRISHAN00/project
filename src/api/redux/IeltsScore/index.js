import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchIeltsScore = createAsyncThunk("fetchIeltsScore", (params, {dispatch}) => {
    return get(params);
});
export const fetchIeltsScorePage = createAsyncThunk("fetchIeltsScorePage", (params) => {
    return get(params);
});
export const fetchIeltsScoreDetails = createAsyncThunk(
    "fetchIeltsScoreDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'scholarships',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchIeltsScore.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchIeltsScore.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchIeltsScore.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchIeltsScorePage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchIeltsScorePage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchIeltsScorePage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchIeltsScoreDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchIeltsScoreDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchIeltsScoreDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
