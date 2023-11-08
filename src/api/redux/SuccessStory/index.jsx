import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchSuccessStory = createAsyncThunk("fetchSuccessStory", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchStudyTips',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchSuccessStory.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchSuccessStory.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchSuccessStory.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
