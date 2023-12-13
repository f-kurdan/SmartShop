import { productsList } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ProductsList = ({ products }: { products: productsList }) => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const createURL = (model:string, color:string, storage:number) => {
        params.set('color', color);
        params.set('storage', storage.toString());

        return (`/products/${model}?${params}`)
    }

    return (
        <div className='flex flex-row gap-2 flex-wrap justify-start items-center'>
            {products.map((product) =>
            (<Link key={product.id} className='' href={createURL(product.model, product.color, product.storage)}>
                <div className=' transition-all duration-300 flex flex-col gap-2 justify-evenly items-center p-5 bg-white hover:shadow-lg hover:shadow-black/30 cursor-pointer active:opacity-80 w-72 h-80'>
                    <Image className='max-h-44 max-w-min' src={product.photo} alt={product.name} width={200} height={200} />
                    <div className='justify-self-end'>
                        <div className='text-sm font-bold text-center  hover:text-cyan-500 active:text-lime-400 '>
                            {product.name}</div>
                        <div className='text-md text-center font-extralight'>{product.price}</div>
                    </div>
                </div>
            </Link>)
            )}
        </div>
    )
}

export default ProductsList