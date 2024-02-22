import React, { useEffect, useRef, useState } from 'react'
import useProducts from '../../../../hooks/products/useProducts'
import Image from 'next/image'
import { TrashIcon } from '@heroicons/react/24/solid';
import useDeleteProduct from '../../../../hooks/products/useDeleteProduct';
import { product } from '../../../../types';
import ProductUpdateForm from '../../dialogs/products/product-update-form';
import { CancelButtonHandlerContext, HandlerContext } from '../../../../contexts/Contexts';
import Backdrop from '../backdrop';
import Pagination from '../../../products/pagination';
import { useSearchParams } from 'next/navigation';


const ProductsList = ({ blur }: {
    blur: boolean
}) => {
    const [toChange, setToChange] = useState<product>();
    const [toOpenDialog, setToOpenDialog] = useState<boolean>(false);
    const dialogRef = useRef<HTMLDialogElement>(null)
    const backdropRef = useRef<HTMLDivElement>(null)
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const page = params.get('page')
    const { data } = useProducts({ page: Number(page) })

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
            if (backdropRef.current && backdropRef.current === e.target) {
                setToOpenDialog(false)
            }
        }

        document.addEventListener('click', onClickOutside)
        return () => document.removeEventListener('click', onClickOutside)
    }, [])

    return (
        <>
            <ul className={`${blur ? "blur-md" : ""} flex flex-col gap-4 w-full h-full`}>
                {toOpenDialog ? (
                    <>
                        <CancelButtonHandlerContext.Provider value={onCancelClick}>
                            <ProductUpdateForm
                                toOpen={toOpenDialog}
                                dialogRef={dialogRef}
                                defaultProduct={toChange} />
                        </CancelButtonHandlerContext.Provider>
                        <Backdrop isOpen={toOpenDialog}
                            backdropRef={backdropRef} />
                    </>
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
            <Pagination totalPages={data?.totalPages} />
        </>
    )
}

export default ProductsList