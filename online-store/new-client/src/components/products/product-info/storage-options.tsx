import Link from 'next/link'
import { useRef } from 'react'
import useProductsByName from '../../../hooks/products/useProductsByName'
import convertToSlug from '../../../utils/convertToSlug'

const StorageOptions = ({ productName, color, initialStorage }:
    {
        productName?: string,
        color?: string,
        initialStorage?: string
    }) => {
    const selectedStorageSize = useRef(initialStorage);

    const { data: products } = useProductsByName(productName, color, initialStorage);

    const storageSizes = products ? products?.filter(p => p.name === productName)
    .map(p => p.productInfo?.find(i => i?.name?.trim().toLocaleLowerCase() === 'память')?.description)
    ?.filter((value, index, array) => array.indexOf(value) === index) : []
    
    const createURL = (productName?: string, color?: string, storage?: string) => {
        const slug = convertToSlug(`${productName} ${color} ${storage}`)
        return `${slug}`
    }

    const onClick = (size?: string) => selectedStorageSize.current = size

    return (
        <div className='flex flex-row gap-2 justify-center items-center mt-5'>
            {storageSizes?.map((size, index) =>
            (
                <Link onClick={() => onClick(size)} replace href={createURL(productName, color, size)} key={size} className={`border-2 p-3 rounded-3xl cursor-pointer ${size === selectedStorageSize.current ? "outline outline-[3] outline-lime-300" : ""}`}>{size}</Link>
            ))}
        </div>
    )
}

export default StorageOptions