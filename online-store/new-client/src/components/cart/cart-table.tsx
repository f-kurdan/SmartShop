import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { productAdded, productInstanceRemoved, productRemoved } from '@/redux/cart/cartSlice'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const CartTable = () => {
    const cart = useAppSelector(state => state.cart.value)
    const totalSum = cart.reduce((total, item) => total += item.product.price * item.quantity, 0)
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const createURLtoProductPage = (model: string, color: string, storage: number) => {
        params.set('color', color);
        params.set('storage', storage.toString());

        return (`/products/${model}?${params}`)
    }

    return cart.length ? (
        <table className='table-auto border border-solid rounded-lg shadow-md'>
            <thead className='bg-gray-50 text-xs font-semibold uppercase text-gray-400'>
                <tr>
                    <th></th>
                    <th className='p-2'>
                        <span className="text-center font-semibold">Товар</span>
                    </th>
                    <th className='p-2'>
                        <span className="text-center font-semibold">Цена</span>
                    </th>
                    <th className='p-2'>
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
                        <td className="p-2">
                            <Link href={createURLtoProductPage(item.product.model, item.product.color, item.product.storage)} className="text-center text-gray-800 font-semibold hover:text-cyan-300">{item.product.name}
                                <div className='font-extralight'>
                                    <span>Артикль: </span>
                                    <span>{item.product.SKU}</span>
                                </div>
                            </Link>
                        </td>
                        <td className="p-2 text-center"> {item.product.price} ₽</td>
                        <td className="p-2 text-center">
                            <div className='flex flex-row justify-center gap-2 items-center px-1 border-2 rounded-2xl border-gray-500 w-[50%] '>
                                <MinusIcon onClick={() => dispatch(productInstanceRemoved({ product: item.product, quantity: 1 }))} width={30} height={30} className='cursor-pointer active:blur-sm' />
                                <span className='border-l-2 border-r-2 border-s-gray-300 px-2'>{item.quantity}</span>
                                <PlusIcon onClick={() => dispatch(productAdded({ product: item.product, quantity: 1 }))} width={30} height={30} color='black' className=' cursor-pointer active:blur-sm' />
                            </div>
                        </td>
                        <td className="p-2 text-center"> {item.product.price * item.quantity} ₽</td>
                        <td className="cursor-pointer">
                            <TrashIcon onClick={() => dispatch(productRemoved(item))} className='w-5 h-5' />
                        </td>
                    </tr>
                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><span className='text-lg font-bold text-center'>Итого:</span></td>
                    <td><span className='text-lg font-bold text-center'>{totalSum} ₽</span></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    ) : <div className='font-bold text-lg text-red-400 '>Корзина пуста</div>
}

export default CartTable
