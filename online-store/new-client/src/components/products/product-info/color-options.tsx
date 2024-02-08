import Link from 'next/link'
import { useRef } from 'react'
import useProductsByName from '../../../hooks/products/useProductsByName'
import convertToSlug from '../../../utils/convertToSlug'

const ColorOptions = ({ productName, storageSize, initialColor }:
    {
        productName?: string,
        storageSize?: string,
        initialColor?: string
    }) => {
    const selectedColor = useRef(initialColor)

    const { data: products } = useProductsByName(productName, initialColor, storageSize);
   
    const colors = products ? products
        ?.filter(p => p.name === productName)
        .map(p => p.productInfo.find(i => i?.name?.trim().toLocaleLowerCase() === 'цвет')?.description)
        ?.filter((value, index, array) => array.indexOf(value) === index)
        : []

        console.log("color: ", products, colors)
    

    const createURL = (productName?: string, color?: string, storage?: string) => {
        const slug = convertToSlug(`${productName} ${color} ${storage}`)
        return `${slug}`
    }

    const onClick = (color?: string) => selectedColor.current = color

    return (
        <div className='flex flex-row gap-2 justify-center items-center mt-5'>
            {colors.length && colors.map((color, index) =>
            (
                <Link onClick={() => { onClick(color) }} replace key={index} href={createURL(productName, color, storageSize)}>
                    <div className={`border-2 p-4 ${color === 'white' || color === 'black' ? `bg-${color}` : 'bg-' + color + '-200'}  ${color === selectedColor.current ? "outline outline-[3] outline-lime-300" : ""} rounded-full cursor-pointer`}>{color}</div>
                </Link>
            ))}
        </div>
    )
}

export default ColorOptions