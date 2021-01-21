import { useState } from 'react'
import { useSelector } from 'react-redux';
import { total } from '../store/basket';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Form () {

    const basket = useSelector(state => state.basket);
    const {products} = basket;
    const [validationError, setValidationError] = useState('')

    const DeliverySchema = Yup.object().shape({

       firstName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),

       lastName: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),

       street: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),

       city: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),

       telephone: Yup.string()
         .min(4, 'Too Short!')
         .max(20, 'Too Long!')
         .required('Required'),

       number: Yup.number().required('Required').positive().integer(), 

       postalCode: Yup.number().required('Required').positive().integer(), 

       email: Yup.string().email('Invalid email').required('Required'),
    })

    return (
        <>
        <table className="uk-table">
            <thead>
                <tr>
                    <th></th>
                    <th className="uk-table-right">Good</th>
                    <th className="uk-table-right">Price</th>
                    <th className="uk-table-right">Amount</th>
                    <th className="uk-table-right">Total</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, i) => (
                    <tr key={item.id}>
                        <td>{i + 1}.</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qnty}</td>
                        <td>{item.qnty * item.price}</td>
                    </tr>
                ))}
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th className="uk-table-right">Total:</th>
                    <th>{total(products)}</th>
                </tr>
            </tbody>
        </table>
        <Formik

        initialValues={({
          firstName: '',
          lastName: '',
          street: '',
          number: 0,
          postalCode: 0,
          city: '',
          telephone: '',
          email: '',
          totalPrice: total(products),
          basket: JSON.stringify(products)  
        })}

        onSubmit={async (values, actions) => {

            try {
                const validData = DeliverySchema.validateSync(values, { abortEarly: false });
                await axios.post("http://localhost:3000/order/movie", validData)
            } 
            catch (err) {
                if(/ValidationError/.test(err)) setValidationError("Please fulfill all the inputs correcly.")
                else setValidationError("Some network error has occured.")
                setTimeout(()=> setValidationError(""), 3000)
            }

        }}>
            {props=> (
                <form onSubmit={props.handleSubmit}>
                    <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Delivering data</legend>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="First Name" name="firstName" 
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.firstName}                
                            />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Last Name" name="lastName"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.lastName}                
                            />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Street" name="street"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.street}                
                            />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Number" name="number"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.number}                
                            />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="City" name="city"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.city}                
                            />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Postal code" name="postalCode"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.postalCode}                
                            />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="E-mail" name="email"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.email}                
                            />
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Telephone" name="telephone"
                             onChange={props.handleChange}
                             onBlur={props.handleBlur}
                             value={props.values.telephone}                
                            />
                        </div>
                        <div className="uk-margin" id="formik-error">{validationError}</div>
                        <div className="uk-margin">
                            <a className="uk-button uk-button-default" href="#/basket">Back to basket</a>
                            &nbsp;
                            <button className="uk-button uk-button-default" type="submit">Submit your order</button>
                        </div>
                    </fieldset>
                </form>
            )}
        </Formik>    
        </>
    )
}
