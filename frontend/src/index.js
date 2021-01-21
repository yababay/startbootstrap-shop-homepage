import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import store from './store';
import App from './App'
import Total from './Total'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    , document.querySelector('#root')
)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Total />
        </Provider>
    </React.StrictMode>
    , document.querySelector('#total-price')
)
