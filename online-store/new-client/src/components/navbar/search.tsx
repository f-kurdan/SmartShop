import useProducts from '@/hooks/useProducts'
import { montserrat } from '@/styles/fonts'
import { productsList } from '@/types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const Search = () => {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)
    const params = new URLSearchParams(searchParams)
    const { data } = useProducts()
    const [searchOptions, setSearchOptions] = useState<productsList | string[]>()

    const placeholder = 'Введите название товара'
    const catalog = '/catalog'

    const handleChange = useDebouncedCallback((value: string) => {
        if (value) {
            const products = data?.filter(product => product.name.toLowerCase().includes(value.toLowerCase()))
                .slice(0, 5)
            setSearchOptions(!!products?.length ? products : [`По запросу ${value} ичего не найдено`])
        }
        else setSearchOptions([])
    }, 300)

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (inputRef.current?.value) {
                params.set('query', inputRef.current?.value)
            } else {
                params.delete('query')
            }

            replace(`${catalog}?${params.toString()}`)
        }
    }

    const onIconClick = () => {
        if (inputRef.current?.value) {
            params.set('query', inputRef.current?.value)
        } else {
            params.delete('query')
        }

        replace(`${catalog}?${params.toString()}`)
    }

    const onOptionClick = (value: string) => {
        if (value) {
            params.set('query', value)
        } else {
            params.delete('query')
        }

        replace(`${catalog}?${params.toString()}`)
    }

    return (
        <div className={`${montserrat.className} group relative flex w-1/3 flex-shrink-0`}>
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="peer w-full block rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
                ref={inputRef}
                onKeyDown={handleSearch}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <MagnifyingGlassIcon onClick={onIconClick} className="absolute hover:cursor-pointer left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            <div className='bg-white w-fit absolute top-full left-0py-2 px-3 rounded-md shadow-md hidden group-focus-within:block hover:block'>
                {!!searchOptions?.length && searchOptions.map(option =>
                    (typeof option === "string") ? (<div className='p-3'>{option}</div>) :
                        (
                            <div className='hover:cursor-pointer text-sm p-2 my-2 hover:bg-gradient-to-br hover:text-white hover:from-indigo-500 hover:via-sky-600 hover:to-blue-700 block active:from-purple-950 active:via-red-700 active:to-yellow-600 rounded-md ' onClick={() => onOptionClick(option?.name.toLowerCase())}>{option?.name}</div>
                        ))}
            </div>
        </div>
    )
}

export default Search