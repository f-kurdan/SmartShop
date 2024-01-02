import { product } from '@/types';
import { createContext } from 'react';

const func = (value:string) => {}
export const HandlerContext = createContext(func)

export const NameContext = createContext('')

export const ProductContext = createContext<product | undefined>(undefined)
