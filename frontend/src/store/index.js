import { configureStore } from '@reduxjs/toolkit'
import settingsReducer    from './settings'
import goodiesReducer     from './goodies'

export default configureStore({
  reducer: {
    settings: settingsReducer,
    goodies: goodiesReducer
  },
});