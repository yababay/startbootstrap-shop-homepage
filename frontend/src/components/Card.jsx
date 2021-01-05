import { useSelector } from 'react-redux'

export default function (props) {

    const {id, addToBasket, increaseQuantity, decreaseQuantity, title, description} = props
    const quantity = useSelector(state => {
        if(!!addToBasket) return ''
        const items = state.basket.filter(el => el.id === id)
        if(!items.length) return ''
        const {qnty, price} = items[0]
        return <p className="card-text"><strong>Amount:</strong> {qnty}; <strong>Sum:</strong> {qnty * price}</p>
    })

    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{title}</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">{description}</p>
                    {quantity}
                </div>
                <div className="card-footer">
                    {
                        function(id, addToBasket, increaseQuantity, decreaseQuantity){
                            if(addToBasket) return <button className="btn btn-primary" onClick={() => addToBasket(id)}>Buy it</button>
                            return (
                                    <>
                                        <button className="btn btn-primary" onClick={() => increaseQuantity(id)}>Get more</button>
                                        <button className="btn btn-primary" onClick={() => decreaseQuantity(id)}>Get less</button>
                                    </>
                            )
                        }(id, addToBasket, increaseQuantity, decreaseQuantity)
                    }
                </div>
            </div>
        </div>
    )
}
