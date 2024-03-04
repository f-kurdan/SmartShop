import React, { useRef, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useProducts from '@/hooks/products/useProducts'
import { montserrat } from '@/styles/fonts'
import { useDebouncedCallback } from 'use-debounce'
import Link from 'next/link'
import Image from 'next/image'
import SearchListItem from './search-list-item'

const Search = () => {
    const [query, setQuery] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const { data } = useProducts({ limit: 5, query: query })

    const handleChange = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }, 300)

    const placeholder = 'Введите название товара'
    return (
        <div className={`${montserrat.className} group relative  flex w-3/5 flex-shrink-0 `}>
            <input
                className="peer active:outline bg-gray-100 focus:outline-cyan-200 w-full block rounded-xl py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={handleChange}
                ref={inputRef}
            />
            <MagnifyingGlassIcon className="absolute cursor-pointer left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            {
                !!data?.products?.length && (
                    <div className='overflow-y-scroll z-50 bg-white w-full absolute top-full p-3 rounded-md shadow-md hidden group-focus-within:block hover:block '>
                        {data?.products?.map((option) =>
                        (
                            <SearchListItem key={option.id} option={option} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Search