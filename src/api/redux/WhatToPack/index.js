import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchWhatToPack = createAsyncThunk("fetchWhatToPack", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchWhatToPack',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchWhatToPack.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchWhatToPack.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchWhatToPack.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
