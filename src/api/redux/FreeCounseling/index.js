import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchFreeCounseling = createAsyncThunk("fetchFreeCounseling", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchMoneyTransfer',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchFreeCounseling.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchFreeCounseling.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchFreeCounseling.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
