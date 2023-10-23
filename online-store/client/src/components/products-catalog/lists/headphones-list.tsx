import React from 'react'
import NoItems from './no-items'
import { headphones } from '@/test-products'

const HeadphonesList = () => {
  return headphones.length ? (
    <>
      {headphones.map((item, index) =>
      (<div key={index} className='flex flex-row justify-evenly items-start px-10 py-7 bg-white rounded-xl shadow-lg shadow-black/30 mb-2'>
        <img className='max-w-48 max-h-48 object-cover' src={item.photo} alt="Наушники" />
        <div className='flex flex-col justify-start items-start text-sm px-3'>
          <p className='mb-5 text-sm font-semibold hover:text-blue-600 hover:cursor-pointer'>{item.name}</p>
          <p className='mb-3'><span className='font-semibold'>Диапазон частот: </span>{item.frequency_range}</p>
          <p className='mb-3'><span className='font-semibold'>Тип соединения: </span>{item.connection_type}</p>
          <p className='mb-3'><span className='font-semibold'>Микрофон: </span>{item.mic}</p>
          <p><span className='font-semibold'>Время работы </span>{item.battery_life}</p>
        </div>
        <div className='min-w-fit self-end'>
          <p className='border-2 border-black border-solid  p-1 '>
            {item.price}
          </p>
          <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>В корзину</p>
        </div>
      </div>)
      )}
    </>
  ) : 
  (<NoItems/>)
}

export default HeadphonesList