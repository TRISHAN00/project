import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchStudyInUsa = createAsyncThunk("fetchStudyInUsa", (params, {dispatch}) => {
    return get(params);
});
export const fetchStudyIsUsaPage = createAsyncThunk("fetchStudyIsUsaPage", (params) => {
    return get(params);
});
export const fetchStudyInUsaDetails = createAsyncThunk(
    "fetchStudyInUsaDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'scholarships',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchStudyInUsa.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchStudyInUsa.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchStudyInUsa.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchStudyIsUsaPage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchStudyIsUsaPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchStudyIsUsaPage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchStudyInUsaDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchStudyInUsaDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchStudyInUsaDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
