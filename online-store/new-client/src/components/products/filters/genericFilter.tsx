import { useBrands } from '@/hooks/useBrands'
import useCategories from '@/hooks/useCategories'
import useColors from '@/hooks/useColors'
import { useSearchParams } from 'next/navigation'
import React, { ChangeEvent } from 'react'

const GenericFilter = ({ onFilterChange, increment, param }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void, increment: (toIncrement: boolean) => void, param: string }) => {
    const hook = getHook(param)!
    const { data } = hook();
    const searchParams = useSearchParams();
    const selectedParams = searchParams.get(param)?.split(';')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e, param);
        increment(e.target.checked)
    }

    return (
        <div>
            <h2 className='font-bold mb-2'>{getTitle(param)}</h2>
            {data?.map(option =>
            (<div key={option.id} className='ml-2'>
                <input defaultChecked={!!selectedParams?.includes(option.slug)} onChange={onChange} className='mr-2 scale-125 cursor-pointer' type="checkbox" name='category' id={option.id.toString()} value={option.slug} />
                <label htmlFor={option.id.toString()}>{option.name}</label>
            </div>))}
        </div>
    )
}

const getHook = (param: string) => {
    switch (param) {
        case 'category':
            return useCategories
        case 'brand':
            return useBrands
    }
}

const getTitle = (param: string) => {
    switch (param) {
        case 'category':
            return 'Категория'
        case 'brand':
            return 'Бренд'
        default: ''
    }
}

export default GenericFilter