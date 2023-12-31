import { getColors } from '@/services/charachteristics.service'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'
import useProducts from '../../../hooks/useProducts'

const ColorOptions = () => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    const path = usePathname()
    const selectedColor = params?.get('color') ?? "white";

    const { data } = useProducts();
    const colors = data? data.products.map(p => p.productInfo
        .find(i => i.name === 'Цвет')?.description)?.filter((value, index, array) => array.indexOf(value) === index) 
        : []

    const changeColor = (color: string) => {
        params.set('color', color)
        router.replace(`${path}?${params}`)
    }

  return (
    <div className='flex flex-row gap-2 justify-center items-center mt-5'>
                {colors?.map((color, index) =>
                (
                    <div onClick={() => changeColor(color!)} key={index} className={`border-2 p-4 ${color === 'white' || color === 'black' ? `bg-${color}` : 'bg-' + color + '-200'}  ${color === selectedColor ? "outline outline-[3] outline-lime-300" : ""} rounded-full cursor-pointer`}>{color}</div>
                ))}
            </div>
     )
}

export default ColorOptions