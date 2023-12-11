import useCategories from '@/hooks/useCategories';
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, memo } from 'react'

const CategoriesFilter = ({ onFilterChange, increment }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void, increment: (toIncrement: boolean) => void }) => {
    const { data: categories } = useCategories();
    const searchParams = useSearchParams();
    const selectedCategories = searchParams.get('category')?.split(';')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e, 'category');
        if (e.target.checked) {
            increment(true)
        } else {
            increment(false)
        }
    }

    return (
        <div>
            <h2 className='font-bold mb-2'>Категории</h2>
            {categories?.map(category =>
            (<div key={category.id} className='ml-2'>
                <input defaultChecked={!!selectedCategories?.includes(category.id.toString())} onChange={onChange} className='accent-black mr-2 scale-125 cursor-pointer ' type="checkbox" name='category' id={category.id.toString()} value={category.name} />
                <label htmlFor={category.id.toString()}>{category.name}</label>
            </div>))}
        </div>
    )
}

export default CategoriesFilter