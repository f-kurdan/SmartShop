import { products } from '@/data'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'

function getColors(model: string, storage: number) {
    if (storage)
        return Promise.resolve(products.filter(p => p.model === model && p.storage === storage).map(p => p.color).sort())
    return Promise.resolve(products.filter(p => p.model === model).map(p => p.color).sort())
}

function getStorageSizes(model: string, color: string) {
    if (color)
        return Promise.resolve(products.filter(p => p.model === model && p.color === color ).map(p => p.storage))
    return Promise.resolve(products.filter(p => p.model === model).map(p => p.storage))
}

const ProductInfo = ({model, price, name, characteristics }: {model:string,
    price?: string, name?: string, characteristics?: {
        name: string;
        value: string;
    }[] | {
        name: string;
        value: string;
    }[]
}) => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    const path = usePathname() 
    const selectedColor = params?.get('color') ?? "white";
    const selectedStorageSize = Number(params?.get('storage')) ?? 128;

    const {data: colors} = useQuery(['colors', model, selectedStorageSize], () => getColors(model, selectedStorageSize))

    const {data: storageSizes} = useQuery(['storage', model, selectedColor], () => getStorageSizes(model, selectedColor))

    const changeColor = (color: string) => {
        params.set('color', color)
        router.replace(`${path}?${params}`)
    }

    const changeStorageSize = (storage: string) => {
        params.set('storage', storage)
        router.replace(`${path}?${params}`)
    }

    return (
        <div className='flex flex-col justify-start items-start text-base px-3'>
            <p className='font-black text-lg'>{name}</p>
            <div className='flex flex-row gap-2 justify-center items-center mt-5'>
                {colors?.map(color =>
                (
                    <div onClick={() => changeColor(color)} key={color} className={`border-2 p-4 ${color === 'white' || color === 'black' ? `bg-${color}` : 'bg-'+ color + '-200'}  ${color === selectedColor ? "outline outline-[3] outline-blue-500" : ""} rounded-full cursor-pointer`}></div>
                ))}
            </div>
            <div className='flex flex-row gap-2 justify-center items-center mt-5'>
                {storageSizes?.map(size =>
                (
                    <div onClick={() => changeStorageSize(size.toString())} key={size} className={`border-2 p-3 rounded-3xl cursor-pointer ${size === selectedStorageSize ? "outline outline-[3] outline-blue-500" : ""}`}>{size} {size > 32 ? `Гб` : 'Тб'}</div>
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