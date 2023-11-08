import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchStudyInUk = createAsyncThunk("fetchStudyInUk", (params, {dispatch}) => {
    return get(params);
});
export const fetchStudyInUkPage = createAsyncThunk("fetchStudyIsUkPage", (params) => {
    return get(params);
});
export const fetchStudyInUkDetails = createAsyncThunk(
    "fetchStudyInUkDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'StudyInUk',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchStudyInUk.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchStudyInUk.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchStudyInUk.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchStudyInUkPage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchStudyInUkPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchStudyInUkPage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchStudyInUkDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchStudyInUkDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchStudyInUkDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
