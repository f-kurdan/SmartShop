import { TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CartTable = () => {
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
                    <tr>
                        <td className="px-4">
                            <input type="checkbox" className="h-5 w-5 shadow-inner" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="cursor-pointer">
                            <TrashIcon className='w-5 h-5'/>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4">
                            <input type="checkbox" className="h-5 w-5 shadow-inner" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="cursor-pointer">
                            <TrashIcon className='w-5 h-5' />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4">
                            <input type="checkbox" className="h-5 w-5 shadow-inner" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="cursor-pointer">
                            <TrashIcon className='w-5 h-5' />
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4">
                            <input type="checkbox" className="h-5 w-5" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="cursor-pointer">
                            <TrashIcon className='w-5 h-5' />
                        </td>
                    </tr>
                    <tr>
                        <td className="p-2">
                        </td>
                        <td className="p-2">
                        </td>
                        <td className="p-2"> </td>
                        <td className="p-2 text-lg">Итого:</td>
                        <td className="p-2 text-lg">400</td>
                        <td className="p-2"> </td>
                    </tr>
                </tbody>
            </table>
        )
    }

export default CartTable
