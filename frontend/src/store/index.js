import { CREATE_STORE, ADD_TO_BASKET, INCREASE_QNTY, DECREASE_QNTY } from './types.js'

export default function (state = {showcase: [], basket: []}, action) {
    let {showcase, basket} = state
    switch (action.type) {
        case CREATE_STORE:
            showcase = action.payload.products
            break
        case ADD_TO_BASKET:
            for(const prod of basket){
                if(prod.id === action.payload.id) return state
            }
            for(const prod of showcase){
                if(prod.id !== action.payload.id) continue
                prod.qnty = 1
                basket.push(prod)
            }
            break
        case INCREASE_QNTY:
            for(const prod of basket){
                if(prod.id !== action.payload.id) continue
                prod.qnty++
            }
            break
        case DECREASE_QNTY :
            for(const i in basket){
                const prod = basket[i]
                if(prod.id !== action.payload.id) continue
                if(!--prod.qnty) basket.splice(i, 1)
            }
            break
        default:
            return state
    }
    return {showcase, basket}
}
