import { getStorageSizes } from '@/services/charachteristics.service'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useQuery } from 'react-query'
import useProductsByName from '../../../hooks/useProductsByName'
import convertToSlug from '../../../utils/convertToSlug'

const StorageOptions = ({productName, color}: {productName?: string, color?: string}) => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    const path = usePathname()
    const selectedStorageSize = params?.get('storage');

    const { data: products } = useProductsByName(productName, color = color);
    const storageSizes = products ? products?.filter(p => p.name === productName).map(p => p.productInfo
        .find(i => i.name === 'Память')?.description)?.filter((value, index, array) => array.indexOf(value) === index)
        : []

    const changeStorageSize = (storage: string) => {
        params.set('storage', storage)
        router.replace(`${path}?${params}`)
    }

    const createURL = (productName?: string, color?: string, storage?: string) => {
        // params.set('storageSize', storageSize)
        const slug = convertToSlug(`${productName} ${color} ${storage}`)
        return `${slug}`
    }

    return (
        <div className='flex flex-row gap-2 justify-center items-center mt-5'>
            {storageSizes?.map((size, index) =>
            (
                <Link replace href={createURL(productName, color, size)} key={index} className={`border-2 p-3 rounded-3xl cursor-pointer ${size === selectedStorageSize ? "outline outline-[3] outline-lime-300" : ""}`}>{size} {Number(size) > 32 ? `Гб` : 'Тб'}</Link>
            ))}
        </div>
    )
}

export default StorageOptions