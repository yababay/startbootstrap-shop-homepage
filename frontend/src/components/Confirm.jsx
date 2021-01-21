//import {useSelector} from "react-redux";

export default function (props) {
    //const basket = useSelector(state => state.basket);
    const sendOrder = (basket) =>{
        const inputs = document.querySelectorAll("form input");
        const inputArray = Array.from(inputs);
        const order = {basket};
        inputArray.forEach(el => {
            const key = el.name;
            const value = el.value;
            order[key] = value;
        })
        fetch("http://localhost:3000/order", {method: "post", body: JSON.stringify(order),
            headers: {"Content-Type": "application/json"}})
            .then(res => res.json())
            .then(obj => alert("ok"))
            .catch(err => console.log(err))
    }
    return (
        <>
        <table>
                <tr>
                    <th>Amount</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            {props.basket.map(item=>(
                <tr>
                <td> {item.qty} </td>
                <td> {item.name} </td>
                <td> {item.price}  $</td>
                </tr>

            ))}
            <tr class="total">
                <td colSpan={2}> Total </td>
                <td>{props.basket.reduce((acc, el)=> acc+el.price * el.qty, 0)} $ </td>

            </tr>
        </table>
            <form>
            <p><label>Voornaam:</label><input type="text" name="firstName" placeholder="Your name.."/></p>
            <p><label>AchterNaam:</label><input type="text"  placeholder="Your last name.." name="lastName" /></p>
            <p><label>Stad:</label><input type="text" name="city"/></p>
            <p><label>Straat:</label><input type="text" name="street"/></p>
            <p><label>Nummer:</label><input type="text" name="number"/></p>
            <p><label>Postcode:</label><input type="text" name="postalCode"/></p>
            <p><label>Email:</label><input type="text" name="email"/></p>
            <p><label>Telefoon:</label><input type="text" name="telephone"/></p>
            </form>
            <button onClick={()=> sendOrder(props.basket)}> Submit </button>

        </>
    )
}