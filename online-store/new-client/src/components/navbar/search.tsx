import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Search = () => {
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const inputRef = React.useRef<HTMLInputElement>(null)
    const params = new URLSearchParams(searchParams)
    
    const placeholder = 'Введите название товара'
    const catalog = '/catalog'

    const handleChange = (value: string) => {
        if (value) {
            params.set('query', value)
        } else {
            params.delete('query')
        }

        replace(`${catalog}?${params.toString()}`)
    }

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

    const onClick = () => {
            if (inputRef.current?.value) {
                params.set('query', inputRef.current?.value)
            } else {
                params.delete('query')
            }

            replace(`${catalog}?${params.toString()}`)
        }

        return (
            <div className="relative flex w-fit flex-shrink-0">
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
                    onClick={onClick}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                <MagnifyingGlassIcon onClick={onClick} className="absolute hover:cursor-pointer left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
        )
    }

    export default Search