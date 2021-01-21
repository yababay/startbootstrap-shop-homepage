import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as basket } from './basket';
import { reducer as showcase } from './showcase';

const reducer = combineReducers({basket, showcase});

export default configureStore({reducer})

