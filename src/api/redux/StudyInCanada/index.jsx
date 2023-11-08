import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchStudyInCanada = createAsyncThunk("fetchStudyInCanada", (params, {dispatch}) => {
    return get(params);
});
export const fetchStudyInCanadaPage = createAsyncThunk("fetchStudyInCanadaPage", (params) => {
    return get(params);
});
export const fetchStudyInCanadaDetails = createAsyncThunk(
    "fetchStudyInCanadaDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'StudyInCanada',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchStudyInCanada.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchStudyInCanada.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchStudyInCanada.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchStudyInCanadaPage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchStudyInCanadaPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchStudyInCanadaPage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchStudyInCanadaDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchStudyInCanadaDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchStudyInCanadaDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
