import { CREATE_STORE, ADD_TO_BASKET, INCREASE_QNTY, DECREASE_QNTY } from './types.js'

export const createStore = (products) => {
    return {type: CREATE_STORE, payload: {products}}
}

export const addToBasket = (id) => {
    return {type: ADD_TO_BASKET, payload: {id}}
}

export const increaseQuantity = (id) => {
    return {type: INCREASE_QNTY, payload: {id}}
}

export const decreaseQuantity = (id) => {
    return {type: DECREASE_QNTY, payload: {id}}
}

