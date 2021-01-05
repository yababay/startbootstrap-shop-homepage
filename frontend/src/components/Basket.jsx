import { useState } from 'react'
import Purchases from './Purchases'
import Order from './Order'
import Personal from './Personal'
import Congrats from './Congrats'

const PURCHASES = 0
const ORDER     = 1
const CONGRATS  = 2

export default function() {
    const [stage, setStage] = useState(PURCHASES)
    switch(stage){
        case ORDER:
            return (
                <>
                    <h2>Please check and fulfill the information about your order</h2>      
                    <Order />
                    <Personal />
                    <div className="basket-footer">
                        <button className="btn btn-primary" onClick={()=> setStage(CONGRATS)}>Submit your data</button>
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
