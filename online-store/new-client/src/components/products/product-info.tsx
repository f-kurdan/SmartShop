import React from 'react'

const ProductInfo = ({price, name, characteristics}: {price: string, name: string, characteristics: {
    name: string;
    value: string;
}[] | {
    name: string;
    value: string;
}[]}) => {
  return (
    <div className='flex flex-col justify-start items-start text-base px-3'>
                <p className='font-black text-lg'>{name}</p>
                <div className='my-5 min-w-fit text-center'>
                  <p className='border-2 border-black border-solid  p-1 '>
                    {price}
                  </p>
                  <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>Купить</p>
                </div>
                {!!characteristics.length && characteristics.map(char => (
                  <p className='mb-3'><span className='font-black'>{char.name}: </span>{char.value}</p>
                ))}
              </div>
  )
}

export default ProductInfo