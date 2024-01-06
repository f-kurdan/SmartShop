import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { productAdded, productInstanceRemoved, productRemoved } from '@/redux/cart/cartSlice'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'

const CartTable = () => {
    const cart = useAppSelector(state => state.cart.value)
    const dispatch = useAppDispatch()
    const totalSum = cart.reduce((total, item) => total += item.product.price * item.quantity, 0)
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const createURLtoProductPage = (slug: string) => {
        return (`/products/${slug}`)
    }

    return cart.length ? (
        <>
            <table className='table-fixed border border-solid rounded-lg shadow-md'>
                <thead className='bg-gray-50 text-xs font-semibold uppercase text-gray-400'>
                    <tr>
                        <th></th>
                        <th className='p-2'>
                            <span className="text-center font-semibold">Товар</span>
                        </th>
                        <th className='p-2'>
                            <span className="text-center font-semibold">Цена</span>
                        </th>
                        <th className='p-2 w-44'>
                            <span className="text-center font-semibold">Количество</span>
                        </th>
                        <th className='p-2'>
                            <span className="text-center font-semibold">Сумма</span>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className=" divide-gray-100 text-sm">
                    {!!cart.length && cart.map((item, index) =>
                    (
                        <tr key={item.product.id}>
                            <td></td>
                            <td className="p-2 text-center">
                                <Link href={createURLtoProductPage(item.product.slug)} className=" text-gray-800 font-semibold hover:text-cyan-300">{item.product.name}
                                    <div className='font-extralight text-sm'>
                                        <span>Артикль: </span>
                                        <span >{item.product.SKU}</span>
                                    </div>
                                </Link>
                            </td>
                            <td className="p-2 text-center">{item.product.price} ₽</td>
                            <td className="text-center">
                                <div className='inline-flex flex-row justify-center gap-2 items-center px-1  rounded-2xl border-2 border-gray-400 w-[50%] '>
                                    <MinusIcon onClick={() => item.quantity !== 1 ? dispatch(productInstanceRemoved({ product: item.product, quantity: 1 })) : {}} width={30} height={30} className='cursor-pointer active:blur-sm' />
                                    <span className='border-l-2 border-r-2 border-s-gray-300 px-2'>{item.quantity}</span>
                                    <PlusIcon onClick={() => dispatch(productAdded({ product: item.product, quantity: 1 }))} width={30} height={30} color='black' className=' cursor-pointer active:blur-sm' />
                                </div>
                            </td>
                            <td className="py-2 text-center w-24"> {item.product.price * item.quantity} ₽</td>
                            <td className="cursor-pointer">
                                <TrashIcon onClick={() => dispatch(productRemoved(item))} className='w-5 h-5' />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex flex-row w-full justify-end items-center gap-2 text-lg font-bold text-center'>
                <span className=''>{`К оплате: `}</span>
                <span className='w-28'>{totalSum} ₽</span>
            </div>
        </>


    ) : <div className='font-bold text-lg text-red-400 '>Корзина пуста</div>
}

export default CartTable
