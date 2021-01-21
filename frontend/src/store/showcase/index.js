import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const name = 'showcase';
const initialState =  {
    products: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('showcase/fetchProducts', async () => {
    const response = await axios({
        method: 'GET',
        url: 'products.json'
    })
    return response;
})

const extraReducers = {
    [fetchProducts.pending]: (state, action) => {
        state.status = 'loading'
        state.products = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.data;
    },
    [fetchProducts.rejected]: (state, action) => {
        state.status = 'failed';
        state.products = [];
    }
}

export const { actions, reducer } = createSlice({initialState, name, extraReducers});

