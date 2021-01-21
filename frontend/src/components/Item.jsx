import { useDispatch } from 'react-redux';
import { increase, decrease } from '../store/basket';

export  default function Item (props) {

    const {id, name, description, qnty, price} = props
    const item = {id, name, description, qnty, price}
    const dispatch = useDispatch();

    return (
            <div className="uk-card uk-card-small uk-card-default" key={id}>
                <div className="uk-card-header">
                    <h3 className="uk-card-title">{name}</h3>
                </div>
                <div className="uk-card-body">
                    <p>{description}</p>
                    <p><b>Price:</b> {price}</p>
                    {qnty ? <p><b>Amount:</b> {qnty}</p> : ''}
                </div>
                <div className="uk-card-footer">
                    {
                        qnty ?
                        <>
                            <button className="uk-button uk-button-default" onClick={()=> dispatch(increase(item))}>Increase</button>
                            <button className="uk-button uk-button-default" onClick={()=> dispatch(decrease(item))}>Decrease</button>
                        </>
                        :
                        <button className="uk-button uk-button-default" onClick={()=> dispatch(increase(item))}>Put into the basket</button>
                    }
                </div>
            </div>
    )
}
