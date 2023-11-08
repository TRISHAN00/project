import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchManagingMoney = createAsyncThunk("fetchManagingMoney", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchManagingMoney',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchManagingMoney.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchManagingMoney.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchManagingMoney.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
