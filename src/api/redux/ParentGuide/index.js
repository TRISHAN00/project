import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchParentGuide = createAsyncThunk("fetchParentGuide", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchParentGuide',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchParentGuide.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchParentGuide.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchParentGuide.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
