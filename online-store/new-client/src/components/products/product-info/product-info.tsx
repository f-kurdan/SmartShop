import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { productAdded, productInstanceRemoved } from '@/redux/cart/cartSlice'
import { product } from '@/types'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import AddToCartSection from './add-to-cart-button'
import ColorOptions from './color-options'
import StorageOptions from './storage-options'


const ProductInfo = ({ data }: {
    data: product | undefined
}) => {
    const dispatch = useAppDispatch();

    const cart = useAppSelector(state => state.cart.value)
    const productQuantityInCart = cart.find(i => i.product.id === data?.id)

    
    return (
        <div className='flex flex-col w-[400px] justify-start items-start text-base px-3'>
            <p className='font-black text-lg w-full'>{data?.name}</p>
            <ColorOptions model={data?.model} />
            <StorageOptions model={data?.model} />            
            <div className='flex flex-col justify-center items-start my-5 min-w-fit text-center'>
                <p className='border-2 border-black border-solid p-1 w-24 '>
                    {data?.price} ₽
                </p>
                <AddToCartSection product={data!} />
            </div>
            {!!data?.specifications?.length && data?.specifications.map(char => (
                <p key={char.name} className='mb-3'><span className='font-black'>{char.name}: </span>{char.value}</p>
            ))}
        </div>
    )
}


export default ProductInfo