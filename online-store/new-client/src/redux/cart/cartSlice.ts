import { product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: product[] = []
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: initialState,
    },
      reducers: {
        productAdded: (state, action) => {
            state.value.push(action.payload)
        },
        productRemoved: (state, action: PayloadAction<product>) => {
            state.value = [...state.value.filter(p => p.id !== action.payload.id)]
        }
      }  
})

export const { productAdded, productRemoved} = cartSlice.actions;

export default cartSlice.reducer;