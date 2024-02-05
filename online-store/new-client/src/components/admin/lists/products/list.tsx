import React, { useRef, useState } from 'react'
import useProducts from '../../../../hooks/products/useProducts'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/24/solid';
import useDeleteProduct from '../../../../hooks/products/useDeleteProduct';
import { product } from '../../../../types';


const ProductsList = ({ blur, onChangeClick }: {
    blur: boolean,
    onChangeClick: (product?: product | undefined) => void,
}) => {
    const [toChange, setToChange] = useState<Number>();
    const { data } = useProducts({})

    const mutation = useDeleteProduct()

    const onChangeButtonClick = (product: product) => {
        //setToChange(product.id)
        onChangeClick(product)
    }

    const handleDelete = (id: number) => {
        mutation.mutate(id)
    }

    return (
        <ul className={`${blur ? "blur-md" : ""} flex flex-col gap-4 w-full h-full`}>
            {data?.products?.map(product => toChange === product.id ?
                (<li key={product.id}>
                    {/*<CategoryUpdateForm 
        id={category.id}
      defaultName={category.name} />*/}
                </li>) :
                (<li className='flex flex-row justify-start items-center gap-5 border-2 border-gray-400 p-3 h-[100px] rounded-md' key={product.id}>
                    <h3 className='min-w-[100px]'>
                        {product.name}
                    </h3>
                    <Image className='max-w-[100%] max-h-[100%] object-cover rounded-md' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${product.images[0]}`} alt={product.name} width={100} height={100} />
                    <button onClick={() => { onChangeButtonClick(product) }} className='product-list-button p-2 bg-yellow-200 rounded-md cursor-pointer justify-self-end'>Изменить</button>
                    <TrashIcon onClick={() => handleDelete(product.id)} color='red' className='w-6 h-6 cursor-pointer justify-self-end' />
                </li>)
            )}
        </ul>
    )
}

export default ProductsList