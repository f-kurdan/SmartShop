import React from 'react'

const colors = ['white', 'black', 'blue', 'green']
const storageSizes = [128, 256, 512, 1]

const ProductInfo = ({ price, name, characteristics } : {
    price?: string, name?: string, characteristics?: {
        name: string;
        value: string;
    }[] | {
        name: string;
        value: string;
    }[]
}) => {
    return (
        <div className='flex flex-col justify-start items-start text-base px-3'>
            <p className='font-black text-lg'>{name}</p>
            <div className='flex flex-row gap-2 justify-center items-center mt-5'>
                {colors.map(color =>
                (
                    <div key={color} className={`border-2 p-4 ${color === 'white' || color === 'black' ? `bg-${color}` : `bg-${color}-500`} rounded-full cursor-pointer`}></div>

                ))}
            </div>
            <div className='flex flex-row gap-2 justify-center items-center mt-5'>
                {storageSizes.map(size =>
                (
                    <div key={size} className='border-2 p-3 rounded-3xl cursor-pointer'>{size} {size > 32? `Гб` : 'Тб'}</div>
                ))}
            </div>
            <div className='my-5 min-w-fit text-center'>
                <p className='border-2 border-black border-solid  p-1 '>
                    {price}
                </p>
                <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>Купить</p>
            </div>
            {!!characteristics?.length && characteristics.map(char => (
                <p className='mb-3'><span className='font-black'>{char.name}: </span>{char.value}</p>
            ))}
        </div>
    )
}

export default ProductInfo