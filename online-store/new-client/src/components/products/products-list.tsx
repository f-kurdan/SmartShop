import { productsList } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsList = ({ products }: { products: productsList }) => {
    return (
        <div className='flex flex-row gap-2 flex-wrap justify-start items-center'>
            {products.map((product) =>
            (<Link className='' href={`/products/${product.id}`}>
                <div key={product.id} className=' transition-all duration-300 flex flex-col gap-2 justify-evenly items-center p-5 bg-white hover:shadow-lg hover:shadow-black/30 hover:cursor-pointer active:opacity-80 w-72 h-80'>
                    <Image className='max-h-44 max-w-min' src={product.photo} alt={product.name} width={200} height={200} />
                    <div className='justify-self-end'>
                        <div className='text-sm text-center  hover:text-cyan-500 active:text-lime-400 '>
                            {product.name}</div>
                        <div className='text-md text-center font-bold'>{product.price}</div>
                    </div>
                </div>
            </Link>)
            )}
        </div>
    )
}

export default ProductsList