import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchHealthCover = createAsyncThunk("fetchHealthCover", (params, {dispatch}) => {
    return get(params);
});
export const fetchHealthCoverPage = createAsyncThunk("fetchHealthCoverPage", (params) => {
    return get(params);
});
export const fetchHealthCoverDetails = createAsyncThunk(
    "fetchHealthCoverDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'healthCover',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchHealthCover.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchHealthCover.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchHealthCover.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchHealthCoverPage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchHealthCoverPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchHealthCoverPage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchHealthCoverDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchHealthCoverDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchHealthCoverDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
