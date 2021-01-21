import { useSelector } from 'react-redux';
import Item from './Item'

export  default  function Basket (props) {

    const basket = useSelector(state => state.basket);
    const {products} = basket

    return (
            <div className="uk-container">
                <h1>The basket</h1>
                <div className="uk-grid uk-child-width-1-3 ui-flex" uk-grid>
                    {products/*.filter(item => item.qnty > 0)*/.map(item => <Item {...item} />)}
                </div>
                <p className="uk-margin">
                {
                    products.length ?
                    <>
                    <a className="uk-button uk-button-default" href="#/store">Back to store</a>
                    <a className="uk-button uk-button-default" href="#/form">Order them</a>
                    </>
                    :
                    <>
                    <span>It is empty. Please select somthing&nbsp;</span>
                    <a href="#/store"> in the store</a>
                    </>
                }
                </p>
            </div>
    )
}
