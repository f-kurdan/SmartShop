import React from 'react'
import { phones } from '@/test-products'
import NoItems from './no-items'
import Image from 'next/image'

const PhonesList = () => {
    return phones ? (
        <div>
            {phones.map((item, index) =>
            (<div key={index} className='flex flex-row justify-evenly items-start px-10 py-7 bg-white mb-2 rounded-xl shadow-lg shadow-black/30 '>
                <Image className='max-w-48 max-h-48' src={item.photo} alt={item.name}  width={160} height={160} />
                <div className='flex flex-col justify-start items-start text-sm px-3'>
                    <p className='mb-5 text-sm font-semibold hover:text-blue-600 hover:cursor-pointer'>{item.name}</p>
                    <p className='mb-3'><span className='font-semibold'>Дисплей: </span>{item.display}</p>
                    <p className='mb-3'><span className='font-semibold'>Процессор: </span>{item.chip}</p>
                    <p className='mb-3'><span className='font-semibold'>Память: </span>{item.capacity}</p>
                    <p><span className='font-semibold'>Основная камера МПикс: </span>{item.camera}</p>
                </div>
                <div className='min-w-fit self-end text-center'>
                    <p className='border-2 border-black border-solid  p-1 '>
                        {item.price}
                    </p>
                    <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>В корзину</p>
                </div>
            </div>)
            )}
        </div>
    ) :  (<NoItems/>)
}

export default PhonesList