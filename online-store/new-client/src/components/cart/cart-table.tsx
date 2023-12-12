import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { productRemoved } from '@/redux/cart/cartSlice'
import { TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CartTable = () => {
    const cart = useAppSelector(state => state.cart.value)
    const dispatch = useAppDispatch()

    return (
        <table className='table-auto border border-solid rounded-lg shadow-md'>
            <thead className='bg-gray-50 text-xs font-semibold uppercase text-gray-400'>
                <tr>
                    <th></th>
                    <th className='p-2'>
                        <div className="text-left font-semibold">Товар</div>
                    </th>
                    <th className='p-2'>
                        <div className="text-left font-semibold">Цена</div>
                    </th>
                    <th className='p-2'>
                        <div className="text-left font-semibold">Количество</div>
                    </th>
                    <th className='p-2'>
                        <div className="text-left font-semibold">Сумма</div>
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
                {!!cart.length && cart.map(item =>
                (
                    <tr key={item.product.id}>
                        <td className="px-4">
                            <input type="checkbox" className="accent-[#0cff0c] h-5 w-5 shadow-inner" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">{item.product.name}</div>
                            <div>
                                <span>Артикл: </span>
                                <span>{item.product.SKU}</span>
                            </div>
                        </td>
                        <td className="p-2"> {item.product.price}</td>
                        <td className="p-2"> {item.quantity}</td>
                        <td className="p-2"> {item.product.price * item.quantity}</td>
                        <td className="cursor-pointer">
                            <TrashIcon onClick={() => dispatch(productRemoved(item))} className='w-5 h-5' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CartTable
