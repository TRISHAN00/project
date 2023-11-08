import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchStudyAbroadBenefit = createAsyncThunk("fetchStudyAbroadBenefit", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchStudyAbroadBenefit',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchStudyAbroadBenefit.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchStudyAbroadBenefit.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchStudyAbroadBenefit.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
