import {
    INIT_SHOWCASE ,
    TO_BASKET     ,
    INCR_AMOUNT   ,
    DECR_AMOUNT
} from '../actions/types.js'

const empty = {
    store : [],
    basket: []
}

export default function (state = {...empty}, action) {
    switch (action.type) {
        case INIT_SHOWCASE:
            const result = {...empty}
            result.store = action.payload.data
            return result 
        case TO_BASKET    :
            if(state.basket.filter(el => el.id === action.payload.id).length){
                alert('The item already is present in the basket.')
                return state
            }
            const item = state.store.filter(el => el.id === action.payload.id)[0]
            state.basket.push(item)
            return {...state}
        case INCR_AMOUNT  :
            return state
        case DECR_AMOUNT  :
            return state
        default:
            return state
    }
}
