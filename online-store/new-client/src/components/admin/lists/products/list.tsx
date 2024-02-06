import React, { useEffect, useRef, useState } from 'react'
import useProducts from '../../../../hooks/products/useProducts'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/24/solid';
import useDeleteProduct from '../../../../hooks/products/useDeleteProduct';
import { product } from '../../../../types';
import ProductUpdateForm from '../../dialogs/products/product-update-form';
import { CancelButtonHandlerContext, HandlerContext } from '../../../../contexts/Contexts';


const ProductsList = ({ blur, onChangeClick }: {
    blur: boolean,
    onChangeClick: (product?: product | undefined) => void,
}) => {
    const [toChange, setToChange] = useState<product>();
    const [toOpenDialog, setToOpenDialog] = useState<boolean>(false);
    const dialogRef = useRef<HTMLDialogElement>(null)
    const { data } = useProducts({})

    const mutation = useDeleteProduct()

    const onChangeButtonClick = (product: product) => {
        setToChange(product)
        setToOpenDialog(true)
    }

    const onCancelClick = () => {
        setToOpenDialog(false)
    }

    const handleDelete = (id: number) => {
        mutation.mutate(id)
    }

    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (!(e.target instanceof Element && e.target.closest('.update-button'))
                && dialogRef.current
                && !dialogRef.current.contains(e.target as Node)) {
                setToOpenDialog(false)
            }
        }

        document.addEventListener('click', onClickOutside)
        return () => document.removeEventListener('click', onClickOutside)
    }, [])

    return (
        <ul className={`${blur ? "blur-md" : ""} flex flex-col gap-4 w-full h-full`}>
            {toOpenDialog ? (
                <CancelButtonHandlerContext.Provider value={onCancelClick}>
                    <ProductUpdateForm
                        name='products'
                        toOpen={toOpenDialog}
                        dialogRef={dialogRef}
                        defaultProduct={toChange} />
                </CancelButtonHandlerContext.Provider>
            ) : null}
            {data?.products?.map(product =>
            (<li className='product-instance flex flex-row justify-start items-center gap-5 border-2 border-gray-400 p-3 h-[100px] rounded-md' key={product.id}>
                <h3 className='min-w-[100px]'>
                    {product.name}
                </h3>
                <Image className='max-w-[100%] max-h-[100%] object-cover rounded-md' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${product.images[0]}`} alt={product.name} width={100} height={100} />
                <button onClick={() => { onChangeButtonClick(product) }} className='update-button p-2 bg-yellow-200 rounded-md cursor-pointer justify-self-end'>Изменить</button>
                <TrashIcon onClick={() => handleDelete(product.id)} color='red' className='w-6 h-6 cursor-pointer justify-self-end' />
            </li>)
            )}
        </ul>
    )
}

export default ProductsList