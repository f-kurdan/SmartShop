import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        "cart": persistedCartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)