import { createSlice } from '@reduxjs/toolkit';
import restore from '../restore'
import backup from '../backup'

const name = 'basket';
const initialState = {products: restore(name)};

const changeAmount = (state, source, amount) => {
    let {products} = state
    let items = products.filter(el => el.id === source.id)
    let item = items.length ? items[0] : {...source, qnty: 0};
    item.qnty += amount;
    console.log(item)
    items = products.filter(el => el.id !== item.id)
    if(item.qnty > 0) items = [...items, item];
    backup(name, items)
    return items
}

const reducers = {
    increase: (state, action) => {state.products = changeAmount(state, action.payload,  1)},
    decrease: (state, action) => {state.products = changeAmount(state, action.payload, -1)}, 
};

export const total = products => products.reduce((acc, el)=> Math.round((acc + el.qnty * el.price) * 100) / 100, 0)

export const { actions, reducer } = createSlice({initialState, name, reducers});
export const { increase, decrease } = actions;
