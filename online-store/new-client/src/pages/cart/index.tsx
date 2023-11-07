import React from 'react'

const Cart = () => {
    return (
        <div className='flex flex-col mx-auto w-full max-w-2xl rounded-sm border border-gray-200 bg-white shadow-lg'>
            <header className="border-b border-gray-100 px-5 py-4 ">
                <div className="font-semibold text-gray-800">Manage Carts</div>
            </header>
            <table className='table-auto w-full'>
                <thead className='bg-gray-50 text-xs font-semibold uppercase text-gray-400'>
                    <tr>
                        <th className='p-2'></th>
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
                        <td className="p-2"> fdfd</td>
                        <td className="p-2"> fdfd</td>
                    </tr>
                </tbody>
            </table>
            {/* <div>Корзина пуста</div> */}
        </div>
    )
}

export default Cart