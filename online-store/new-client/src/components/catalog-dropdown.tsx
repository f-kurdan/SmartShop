import useCategories from '@/hooks/useCategories'
import Link from 'next/link'
import React from 'react'

const CatalogDropdown = () => {
    const { isLoading, data} = useCategories();

    return (
        <div className="absolute left-16 group border-black border-2 border-solid p-1 inline-block w-32 text-center">
            <button className="group-hover:opacity-0">Категории</button>
            <div className="absolute w-40 bg-white hidden z-10 transition duration-500 group-hover:block">
                {isLoading ?? (<span>Идет загрузка...</span>)}
                {data?.length ? data?.map((cat, index) =>
                    (<Link key={index} className='block' href="/catalog">{cat.name}</Link>)
                ) : (
                    <span>Нет данных...</span>
                )}
            </div>
        </div>
    )
}

export default CatalogDropdown