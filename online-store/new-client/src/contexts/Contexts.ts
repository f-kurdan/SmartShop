import { product } from '@/types';
import { createContext } from 'react';

const handler = (value:string) => {}
export const HandlerContext = createContext(handler)

export const CancelButtonHandlerContext = createContext(() => {})
  
export const SetterContext = createContext((value: string) => {})

export const NameContext = createContext('')

export const ProductContext = createContext<product | undefined>(undefined)
