import { useSelector } from 'react-redux';
import { total } from './store/basket';

export default function Total(){

    const basket = useSelector(state => state.basket);
    const {products} = basket;

    return `(total price: ${total(products)}€)`
}
