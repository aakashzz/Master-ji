import {configureStore} from '@reduxjs/toolkit'
import mapValueReducer from './feature/mapValue'
export const store = configureStore({
    reducer:{
        map: mapValueReducer
    }
})