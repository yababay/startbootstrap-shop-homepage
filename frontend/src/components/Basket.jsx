import { useState } from 'react'
import { useSelector } from 'react-redux'
import Purchases from './Purchases'
import Order     from './Order.jsx'
import Personal  from './Personal'
import Congrats  from './Congrats'
import createOrder from './order.js'

const PURCHASES = Symbol()
const ORDER     = Symbol()
const CONGRATS  = Symbol()

export default function() {
    const [stage, setStage] = useState(PURCHASES)
    const basket = useSelector(state => state.basket)
    switch(stage){
        case ORDER:
            return (
                <>
                    <h2>Please check and fulfill the information about your order</h2>      
                    <Order />
                    <Personal />
                    <div className="basket-footer">
                        <button className="btn btn-primary" onClick={async ()=> await createOrder(basket) && setStage(CONGRATS)}>Submit your data</button>
                    </div>
                </>
            )
        case CONGRATS:
            return (
                <>
                    <Congrats />
                    <Order />
                </>
            )
    }
    return (
        <>
            <h2>Your purchases</h2>      
            <Purchases />
            <div className="basket-footer">
                <button className="btn btn-primary" onClick={()=> setStage(ORDER)}>Order your purchases</button>
            </div>
            <br/>
        </>
    )
}
