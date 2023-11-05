import useCategories from '@/hooks/useCategories';
import React from 'react'

const CategoriesFilter = ({ handleCategoriesChange }: { handleCategoriesChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    const { isLoading: isCategoriesLoading, data: categories } = useCategories();
    return (
        <div>
            <h2 className='font-bold mb-2'>Категории</h2>
            {categories?.map(category =>
            (<div key={category.id} className='ml-2'>
                <input onChange={handleCategoriesChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" id={category.name} value={category.id} />
                <label htmlFor={category.name}>{category.name}</label>
            </div>))}
        </div>
    )
}

export default CategoriesFilter