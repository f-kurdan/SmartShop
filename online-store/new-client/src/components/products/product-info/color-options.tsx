import { getColors } from '@/services/charachteristics.service'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'
import useProducts from '../../../hooks/useProducts'
import useProductsByName from '../../../hooks/useProductsByName'
import convertToSlug from '../../../utils/convertToSlug'

const ColorOptions = ({productName, storageSize}: {productName?: string, storageSize?: string}) => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    const path = usePathname()
    const selectedColor = params?.get('color')
    console.log('color: ------------' + selectedColor)

    const { data: products } = useProductsByName(productName, storageSize = storageSize);
    const colors = products ? products?.filter(p => p.name === productName).map(p => p.productInfo
        .find(i => i.name === 'Цвет')?.description)?.filter((value, index, array) => array.indexOf(value) === index)
        : []

    const createURL = (productName?: string, color?: string, storage?: string) => {
        params.set('color', color!)
        const slug = convertToSlug(`${productName} ${color} ${storage}`)
        return `${slug}`
    }

    return (
        <div className='flex flex-row gap-2 justify-center items-center mt-5'>
            {colors.length && colors.map((color, index) =>
            (
                <Link replace key={index} href={createURL(productName, color, storageSize)}>
                    <div className={`border-2 p-4 ${color === 'white' || color === 'black' ? `bg-${color}` : 'bg-' + color + '-200'}  ${color === selectedColor ? "outline outline-[3] outline-lime-300" : ""} rounded-full cursor-pointer`}>{color}</div>
                </Link>
            ))}
        </div>
    )
}

export default ColorOptions