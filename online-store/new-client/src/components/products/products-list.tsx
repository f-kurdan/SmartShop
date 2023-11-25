import { productsList } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsList = ({ products }: { products: productsList }) => {
    return (
        <div className='flex flex-row gap-2 flex-wrap justify-start items-center'>
            {products.map((product) =>
            (<Link href={`/products/${product.id}`}>
                <div key={product.id} className='transition-all duration-300 flex flex-col gap-2 w-72 justify-center items-center p-5 bg-white hover:shadow-lg hover:shadow-black/30 hover:cursor-pointer active:opacity-80'>
                    <Image className='max-w-48 max-h-48' src={product.photo} alt={product.name} width={160} height={160} />
                    <p className='text-sm text-center  hover:text-blue-600 active:text-lime-400 '>{product.name}</p>
                    <p className='text-md text-center font-bold'>{product.price}</p>
                </div>
            </Link>)
            )}
        </div>
    )
}

export default ProductsList