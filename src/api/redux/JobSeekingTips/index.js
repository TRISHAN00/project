import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchJobSeeking = createAsyncThunk("fetchJobSeekingData", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchJobSeeking',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchJobSeeking.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchJobSeeking.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchJobSeeking.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
