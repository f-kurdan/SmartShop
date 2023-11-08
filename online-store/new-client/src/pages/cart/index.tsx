import { montserrat } from '@/styles/fonts'
import React from 'react'

const Cart = () => {
    return (
        <div className={`${montserrat.className} flex flex-col justify-center items-center px-10 py-5 my-3 w-11/12 ounded-sm border border-gray-200 bg-white shadow-lg`}>
            <div className=' flex flex-col w-9/12 justify-center items-stretch'>
            <header className="border-b border-gray-100 py-2 ">
                <div className="font-semibold text-gray-800">Корзина</div>
            </header>
            <table className='table-auto '>
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
                        <td className="p-2">
                            <input type="checkbox" className="h-5 w-5" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> **</td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            <input type="checkbox" className="h-5 w-5" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> **</td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            <input type="checkbox" className="h-5 w-5" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> **</td>
                    </tr>
                    <tr>
                        <td className="p-2">
                            <input type="checkbox" className="h-5 w-5" value="id-1" />
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800">Samsung Galaxy Note 4</div>
                        </td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> 1</td>
                        <td className="p-2"> 100</td>
                        <td className="p-2"> **</td>
                    </tr>
                </tbody>
            </table>
            {/* <div>Корзина пуста</div> */}
            </div>
        </div>
    )
}

export default Cart