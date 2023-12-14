import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { productAdded, productInstanceRemoved } from '@/redux/cart/cartSlice';
import { product } from '@/types';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import React from 'react'

const AddAndRemoveButtons = ({ product }: { product: product }) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart.value)
    const productQuantityInCart = cart.find(i => i.product.id === product?.id)
    
    return (
        <div className='flex flex-row justify-center gap-2 items-center px-3 border-2 rounded-2xl border-gray-500 '>
            <MinusIcon onClick={() => dispatch(productInstanceRemoved({ product: product!, quantity: 1 }))} width={20} height={20} className='cursor-pointer active:blur-sm' />
            <span className='border-l-2 border-r-2 border-s-gray-300 px-2'>{productQuantityInCart?.quantity}</span>
            <PlusIcon onClick={() => dispatch(productAdded({ product: product!, quantity: 1 }))} width={20} height={20} color='black' className=' cursor-pointer active:blur-sm' />
        </div>
    )
}

export default AddAndRemoveButtons