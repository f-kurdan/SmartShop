import React from 'react'

const ShippingInfo = () => {
    return (
        <div className='flex flex-col gap-2 justify-start p-2 border border-solid rounded-lg'>
            <div className='grid grid-cols-2'>
                <h1>Адрес</h1>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='col-span-2'>
                        <label htmlFor="region">Регион/город</label>
                        <input type="text" id='region' name='adress' className='border border-solid border-gray-200 w-full px-1  shadow-inner' />
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="street">Улица</label>
                        <input type="text" id='street' name='adress' className='border border-solid border-gray-200 w-full px-1  shadow-inner' />
                    </div>
                    <div>
                        <label htmlFor="building">Дом/корпус</label>
                        <input type="text" id="building" name='adress' className='border border-solid border-gray-200 w-full shadow-inner px-1 ' />
                    </div>
                    <div>
                        <label htmlFor="entrance">Подъезд</label>
                        <input type="number" name="adress" id="entrance" className='border border-solid border-gray-200 w-full px-1 shadow-inner' />
                    </div>
                    <div>
                        <label htmlFor="floor">Этаж</label>
                        <input type="number" name="adress" id="floor" className='border border-solid border-gray-200 w-full px-1 shadow-inner' />
                    </div>
                    <div>
                        <label htmlFor="apartment">Квартира</label>
                        <input type="number" name="adress" id="apartment" className='border border-solid border-gray-200 w-full px-1 shadow-inner' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <h1>Комментарии</h1>
                <div>
                    <textarea id="comment" name="comment" className='border border-solid border-gray-200 w-full shadow-inner px-2' />
                </div>
            </div>
        </div>
    )
}

export default ShippingInfo