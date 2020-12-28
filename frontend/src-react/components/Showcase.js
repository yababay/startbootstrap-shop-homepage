import { useState, useEffect } from 'react'
//import { useDispatch, useSelector } from 'react-redux'
//import { fetchGoodies } from '../store/goodies';
import Card from './Card'

export default function (props) {

    //const dispatch = useDispatch();
    //const goodiesState = useSelector(state => state.goodies);
    //const {data} = goodiesState;
    const [cards, setCards] = useState([])
    useEffect(() => {
        if(cards.length) return console.log('already fetched')
        fetch('goodies.json')
            .then(res => res.json())
            .then(arr => setCards(arr))
    })

    return (
        <div className="row">
            {cards.map(card => <Card {...card}/>)}
        </div>
    )
}