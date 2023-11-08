import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchVisaAssistant = createAsyncThunk("fetchVisaAssistant", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchVisaAssistant',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchVisaAssistant.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchVisaAssistant.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchVisaAssistant.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
