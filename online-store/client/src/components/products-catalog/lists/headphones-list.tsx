import React from 'react'
import NoItems from './no-items'
import { headphones } from '@/test-products'
import Image from 'next/image'

const HeadphonesList = () => {
  return headphones.length ? (
    //filter?
    //redirect
    <>
      {headphones.map((item, index) =>
      (<div key={index} className='flex flex-row justify-evenly items-start px-10 py-7 bg-white rounded-xl shadow-lg shadow-black/30 mb-2'>
        <Image className='max-w-48 max-h-48' src={item.photo} alt={item.name} width={160} height={160} />
        <div className='flex flex-col justify-start items-start text-sm px-3'>
          <div className='mb-5 text-sm font-semibold hover:text-blue-600 hover:cursor-pointer'>{item.name}</div>
          <div className='mb-3'><span className='font-semibold'>Диапазон частот: </span>{item.frequency_range}</div>
          <div className='mb-3'><span className='font-semibold'>Тип соединения: </span>{item.connection_type}</div>
          <div className='mb-3'><span className='font-semibold'>Микрофон: </span>{item.mic}</div>
          <div><span className='font-semibold'>Время работы </span>{item.battery_life}</div>
        </div>
        <div className='min-w-fit self-end text-center'>
          <div className='border-2 border-black border-solid  p-1 '>
            {item.price}
          </div>
          <div className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>В корзину</div>
        </div>
      </div>)
      )}
    </>
  ) :
    (<NoItems />)
}

export default HeadphonesList