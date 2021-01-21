import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/showcase';
import Item from './Item'

export  default  function Store (props) {

    const showcase = useSelector(state => state.showcase);
    const {products} = showcase;
    const dispatch = useDispatch();


    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])


    return (
        <div>
            <div className="uk-container">
                <h1>Our products</h1>
                <div className="uk-grid uk-child-width-1-3 ui-flex" uk-grid>
                    {products.map(item => <Item {...item} />)}
                </div>
            </div>
            <p className="uk-margin">
                <a className="uk-button uk-button-default" href="#/basket">See the basket</a>
            </p>
        </div>
    )
}
