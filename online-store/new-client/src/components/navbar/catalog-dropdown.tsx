import useCategories from '@/hooks/useCategories';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const CatalogDropdown = () => {
    const { isLoading: isCategoriesLoading, data: categories} = useCategories();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const createURL = (categoryId: number | string) => {
      params.set('category', categoryId.toString());
        return `/catalog/?${params.toString()}`;
      };

    return (
        <div className="absolute opacity-100 left-12 group shadow-md p-1 inline-block w-40 text-center rounded-md">
            <button className="group-hover:opacity-0">Катaлог</button>
            <div className="shadow-md left-0 top-8 absolute w-40 bg-white hidden z-10 group-hover:block rounded-md">
                {isCategoriesLoading ? (<span>Идет загрузка...</span>)
                : categories?.length ? categories?.map((cat) =>
                    (<Link key={cat.id} className='hover:bg-gradient-to-br hover:text-white hover:from-indigo-500 hover:via-sky-600 hover:to-blue-700 block active:from-purple-950 active:via-red-700 active:to-yellow-600 rounded-md' href={createURL(cat.id)}>{cat.name}</Link>)
                ) : (
                    <span>Нет данных...</span>
                )}
            </div>
        </div>
    )
}

export default CatalogDropdown