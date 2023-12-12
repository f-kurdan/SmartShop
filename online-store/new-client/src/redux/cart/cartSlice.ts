import { cartItem, product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: cartItem[] = [
    {
        product : {
            "id": 50,
            "SKU": '201S23',
            "model": "Samsung_Galaxy_S23",
            "name": '6.1" Samsung Galaxy S23 128 ГБ черный',
            "brand_id": 2,
            "price": 74999,
            "photo": "/phones/galaxys23.webp",
            "category_id": 1,
            "color": "black",
            "storage": 128,
            "specifications": [
                { name: "Дисплей", value: '6,1" (2556x1179), OLED' },
                { name: "Процессор", value: 'Qualcomm Snapdragon 8 Gen2' },
                { name: "Память", value: '128 Гб' },
                { name: "Камеры", value: '50/12/10 Мп' },
                { name: "Система", value: 'Android 13' },
                { name: "Цвет", value: 'черный' },
                { name: "Оперативная память", value: '8Гб' },
            ],
        },
        quantity: 1,
    }
]

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: initialState,
    },
    reducers: {
        productAdded: (state, action: PayloadAction<cartItem>) => {
            const prod = state.value.findIndex(p => p.product.id === action.payload.product.id)
            if (prod > 0)
                state.value[prod].quantity = state.value[prod].quantity + 1;
            state.value.push(action.payload)
        },
        productRemoved: (state, action: PayloadAction<cartItem>) => {
            state.value = [...state.value.filter(item => item.product.id !== action.payload.product.id)]
        }
    }
})

export const { productAdded, productRemoved } = cartSlice.actions;

export default cartSlice.reducer;