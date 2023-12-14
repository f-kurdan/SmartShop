import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { productAdded, productInstanceRemoved } from '@/redux/cart/cartSlice'
import { product } from '@/types'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import ColorOptions from './color-options'
import Price from './price'
import Specs from './specs'
import StorageOptions from './storage-options'


const ProductInfo = ({ data }: {
    data: product | undefined
}) => {    
    return (
        <div className='flex flex-col w-[400px] justify-start items-start text-base px-3'>
            <p className='font-black text-lg w-full'>{data?.name}</p>
            <ColorOptions model={data?.model} />
            <StorageOptions model={data?.model} />            
            <Price product={data!} />
            <Specs product={data!} />
        </div>
    )
}


export default ProductInfo