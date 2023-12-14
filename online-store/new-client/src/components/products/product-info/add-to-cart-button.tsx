import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { productAdded, productInstanceRemoved } from '@/redux/cart/cartSlice';
import { product } from '@/types';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react'
import AddAndRemoveButtons from './add-remove-buttons';

const AddToCartSection = ({ product }: { product: product }) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart.value)
    const productQuantityInCart = cart.find(i => i.product.id === product?.id)

    return (
        <div className='flex flex-row justify-center gap-4 items-stretch'>
            {!!productQuantityInCart?.quantity ?
                (
                    <>
                        <Link href={'/cart'} className='bg-lime-400 hover:invert p-1 transition duration-400 cursor-pointer'>Перейти в корзину
                        </Link>
                        <AddAndRemoveButtons product={product} />
                    </>
                )
                : (<p onClick={() => dispatch(productAdded({ product: product!, quantity: 1 }))} className='bg-lime-400 hover:invert p-1 transition duration-400 cursor-pointer min-w-[6rem]'>Купить</p>)}
        </div>
    )
}

export default AddToCartSection