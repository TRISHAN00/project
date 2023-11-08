import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchStudyInAustralia = createAsyncThunk("fetchStudyInAustralia", (params, {dispatch}) => {
    return get(params);
});
export const fetchStudyInAustraliaPage = createAsyncThunk("fetchStudyInAustraliaPage", (params) => {
    return get(params);
});
export const fetchStudyInAustraliaDetails = createAsyncThunk(
    "fetchStudyInUkDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'StudyInUk',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchStudyInAustralia.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchStudyInAustralia.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchStudyInAustralia.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchStudyInAustraliaPage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchStudyInAustraliaPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchStudyInAustraliaPage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchStudyInAustraliaDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchStudyInAustraliaDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchStudyInAustraliaDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
