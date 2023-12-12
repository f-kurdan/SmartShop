import { cartItem, product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: cartItem[] = []

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: initialState,
    },
    reducers: {
        productAdded: (state, action: PayloadAction<cartItem>) => {
            const prod = state.value.findIndex(p => p.product.id === action.payload.product.id)
            console.log(prod)
            if (prod >= 0) {
                console.log('зашел: ' + (state.value[prod].quantity + 1))
                state.value[prod].quantity += 1;
            }
            else
                state.value.push(action.payload)
        },
        productRemoved: (state, action: PayloadAction<cartItem>) => {
            state.value = state.value.filter(item => item.product.id !== action.payload.product.id)
        }
    }
})

export const { productAdded, productRemoved } = cartSlice.actions;

export default cartSlice.reducer;