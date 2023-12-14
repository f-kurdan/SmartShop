import { product } from '@/types'
import React from 'react'
import AddToCartSection from './add-to-cart-button'

const Price = ({ product }: { product: product }) => {
    return (
        <div className='flex flex-col justify-center items-start my-5 min-w-fit text-center'>
            <p className='border-2 border-black border-solid p-1 w-24 '>
                {product.price} ₽
            </p>
            <AddToCartSection product={product} />
        </div>
    )
}

export default Price