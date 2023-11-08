import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchTestimonial = createAsyncThunk("fetchTestimonial", (params, {dispatch}) => {
    return get(params);
});
export const fetchTestimonialPage = createAsyncThunk("fetchTestimonialPage", (params) => {
    return get(params);
});
export const fetchTestimonialDetails = createAsyncThunk(
    "fetchTestimonialDetails",
    (params) => {
        return get(params);
    }
);


const postSlice = createSlice({
    name: 'testimonial',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchTestimonial.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchTestimonial.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchTestimonial.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
        builder.addCase(fetchTestimonialPage.pending, (state) => {
            state.loading = true;
            state.page_data = [];
            state.error = "";
        });
        builder.addCase(fetchTestimonialPage.fulfilled, (state, action) => {
            state.loading = false;
            state.page_data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchTestimonialPage.rejected, (state, action) => {
            state.loading = false;
            state.page_data = [];
            state.error = action.error;
        });
        builder.addCase(fetchTestimonialDetails.pending, (state, action) => {
            state.detailLoading = true;
            state.detail = [];
            state.detailError = "";
        });
        builder.addCase(fetchTestimonialDetails.fulfilled, (state, action) => {
            state.detailLoading = false;
            state.detail = action.payload;
            state.detailError = "";
        });
        builder.addCase(fetchTestimonialDetails.rejected, (state, action) => {
            state.detailLoading = false;
            state.detail = [];
            state.detailError = action.error;
        });
    }
})


export default postSlice.reducer
