import React, { useRef, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useProducts from '@/hooks/products/useProducts'
import { montserrat } from '@/styles/fonts'
import { useDebouncedCallback } from 'use-debounce'
import Link from 'next/link'
import Image from 'next/image'

const Search = () => {
    const [query, setQuery] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const { data } = useProducts({query: query})

    const handleChange = useDebouncedCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }, 500)
    
    const placeholder = 'Введите название товара'
    return (
        <div className={`${montserrat.className} group relative flex w-3/5 flex-shrink-0 `}>
            <input
                className="peer active:outline bg-gray-100 focus:outline-cyan-200 w-full block rounded-xl py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={handleChange}
                ref={inputRef}
            />
            <MagnifyingGlassIcon className="absolute cursor-pointer left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            <div className='bg-white w-full absolute top-full p-3 rounded-md shadow-md hidden group-focus-within:block hover:block '>
                {!!data?.products?.length && data?.products?.map((option, index) =>
                (
                    <Link href={`/products/${option.slug} `} className='flex flex-row justify-between items-center p-2  hover:bg-gradient-to-br hover:text-white hover:from-indigo-500 hover:via-sky-600 hover:to-blue-700 active:from-purple-950 active:via-red-700 active:to-yellow-600 rounded-md' key={index}>
                    <div  className='cursor-pointer text-sm p-2 my-2  ' >{option.name}</div>
                    <Image src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${option.images[0]}`} alt={option.name} width={40} height={40} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Search