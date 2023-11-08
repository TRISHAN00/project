import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchAccommodation = createAsyncThunk("fetchAccommodation", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchAccommodation',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAccommodation.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchAccommodation.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchAccommodation.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
