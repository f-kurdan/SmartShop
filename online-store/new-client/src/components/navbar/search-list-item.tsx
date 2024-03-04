import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { product } from '../../types'

const SearchListItem = ({ option }: { option: product }) => {
    const color = `${option.productInfo.find(s => s?.name?.trim().toLocaleLowerCase() === "цвет")?.description}`
    const storageSize = `${option.productInfo.find(s => s?.name?.trim().toLocaleLowerCase() === "память")?.description}`

    return (
        <Link href={`/products/${option.slug} `} className='flex flex-row justify-between items-center p-2  hover:bg-gradient-to-br hover:text-white hover:from-indigo-500 hover:via-sky-600 hover:to-blue-700 active:from-purple-950 active:via-red-700 active:to-yellow-600 rounded-md'>
            <div className='cursor-pointer text-sm p-2 my-2  ' >{option.name}, {color}, {storageSize}</div>
            <Image className='max-w-[50px] max-h-[50px] object-contain' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${option.images[0]}`} alt={option.name} width={40} height={40} />
        </Link>
    )
}

export default SearchListItem