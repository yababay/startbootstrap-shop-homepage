import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchGoodies = createAsyncThunk('goodies/fetchGoodies', async () => {
    const response = await axios({
        method: 'GET',
        url: 'goodies.json'
    })
    return response;
})

const goodiesSlice = createSlice({
    name: 'goodies',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },

    extraReducers: {
        [fetchGoodies.pending]: (state, action) => {
            state.status = 'loading'
            state.data = [];
        },
        [fetchGoodies.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload.data;
        },
        [fetchGoodies.rejected]: (state, action) => {
            state.status = 'failed';
            state.data = [];
        }
    }
});

export const selectGoodies = state => state.goodies.data;

export default goodiesSlice.reducer;