import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchNetworkAndSocial = createAsyncThunk("fetchNetworkAndSocial", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchNetworkAndSocial',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchNetworkAndSocial.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchNetworkAndSocial.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchNetworkAndSocial.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
