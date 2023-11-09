import React from 'react'

const DeliveryType = () => {
    return (
        <div className='flex flex-col justify-start p-2 shadow-md'>
            <h3>Способ доставки</h3>
            <hr />
            <div className='flex flex-col gap-2 mt-2'>
                <div className='flex  gap-2'>
                    <input  type="radio" id='carrier' name='delivery' value='carrier' className='cursor-pointer scale-125' />
                    <label htmlFor="carrier" className='cursor-pointer'>Курьером</label>
                </div>
                <div className='flex  gap-2'>
                    <input type="radio" id='pickup' name='delivery' value='pickup' className='cursor-pointer scale-125' />
                    <label htmlFor="pickup" className='cursor-pointer'>Самовывоз</label>
                </div>
            </div>
        </div>
    )
}

export default DeliveryType