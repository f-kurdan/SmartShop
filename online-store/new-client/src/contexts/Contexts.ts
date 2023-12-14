import { product } from '@/types';
import { createContext } from 'react';

const func = (value:string) => {}
export const HandlerContext = createContext(func)

export const NameContext = createContext('')

const defaultProduct = {
    id: 0,
    SKU: '',
    model: '',
    name: '',
    brand_id: 0,
    category_id: 0,
    price: 0,
    photo: '',
    color: '',
    storage: 0,
    specifications: [{
        name: '',
        value: '',
    }]
}
export const ProductContext = createContext<product | undefined>(defaultProduct)
