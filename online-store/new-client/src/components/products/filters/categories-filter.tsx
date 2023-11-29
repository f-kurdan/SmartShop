import useCategories from '@/hooks/useCategories';
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, memo } from 'react'

const CategoriesFilter = memo(({ onFilterChange }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void }) => {
    const { isLoading: isCategoriesLoading, data: categories } = useCategories();
    const searchParams = useSearchParams();
    const selectedCategories = searchParams.get('category')?.split(';')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => onFilterChange(e, 'category')

    return (
        <div>
            <h2 className='font-bold mb-2'>Категории</h2>
            {categories?.map(category =>
            (<div key={category.id} className='ml-2'>
                <input defaultChecked={!!selectedCategories?.includes(category.id.toString())} onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='category' id={category.id.toString()} value={category.name} />
                <label htmlFor={category.id.toString()}>{category.name}</label>
            </div>))}
        </div>
    )
})

export default CategoriesFilter