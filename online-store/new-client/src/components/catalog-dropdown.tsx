import useCategories from '@/hooks/useCategories'
import Link from 'next/link'
import React from 'react'

const CatalogDropdown = () => {
    const { isLoading: isCategoriesLoading, data: categories} = useCategories();

    return (
        <div className="absolute left-16 group border-black border-2 border-solid p-1 inline-block w-32 text-center">
            <button className="group-hover:opacity-0">Категории</button>
            <div className="absolute w-40 bg-white hidden z-10 transition duration-500 group-hover:block">
                {isCategoriesLoading ? (<span>Идет загрузка...</span>)
                : categories?.length ? categories?.map((cat) =>
                    (<Link key={cat.id} className='block' href={`/catalog/${cat.id}`}>{cat.name}</Link>)
                ) : (
                    <span>Нет данных...</span>
                )}
            </div>
        </div>
    )
}

export default CatalogDropdown