import {
    INIT_SHOWCASE ,
    TO_BASKET     ,
    INCR_AMOUNT   ,
    DECR_AMOUNT
} from './types.js'

export const initShowcase = data => ({
    type: INIT_SHOWCASE,
    payload: {data}
})

export const toBasket     = id => ({
    type: TO_BASKET,
    payload: {id}
})

export const incrAmount   = id => ({
    type: INCR_AMOUNT,
    payload: {id}
})

export const decrAmount   = id => ({
    type: DECR_AMOUNT,
    payload: {id}
})

