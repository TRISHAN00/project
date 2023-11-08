import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {get} from "../../network/axiosServices";


const initialState = {
    loading: false,
    posts: [],
    error: '',
}

export const fetchStudentBanking = createAsyncThunk("fetchStudentBanking", (params, {dispatch}) => {
    return get(params);
});


const postSlice = createSlice({
    name: 'fetchStudentBanking',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchStudentBanking.pending, (state) => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchStudentBanking.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error = ''

        })
        builder.addCase(fetchStudentBanking.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.error
        })
    }
})


export default postSlice.reducer
