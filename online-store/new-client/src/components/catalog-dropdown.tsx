import useCategories from '@/hooks/useCategories';
import Link from 'next/link'
import React from 'react'

const CatalogDropdown = () => {
    const { isLoading: isCategoriesLoading, data: categories} = useCategories();

    return (
        <div className="absolute opacity-100 left-16 group border-black border-2 border-solid rounded-lg p-1 inline-block w-40 text-center">
            <button className="group-hover:opacity-0">Категории</button>
            <div className=" border-black border-2 border-solid rounded-lg  left-0 top-8 absolute w-40 bg-slate-50 hidden z-10  group-hover:block">
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