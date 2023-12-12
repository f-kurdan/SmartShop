import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import cartReducer from './cartSlice'

export default configureStore({
    reducer: {
        [cartSlice.name]: cartReducer,
    },
})