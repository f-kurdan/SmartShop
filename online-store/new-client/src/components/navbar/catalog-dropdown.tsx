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
        <div className="opacity-100 ralative group inline-block w-40 text-center py-[9px]">
            <button className="group-hover:invisible">Катaлог</button>
            <div className="shadow-md absolute top-12 w-40 bg-white hidden z-10 group-hover:block">
                {isCategoriesLoading ? (<span>Идет загрузка...</span>)
                : categories?.length ? categories?.map((cat) =>
                    (<Link key={cat.id} className='py-1 hover:bg-gradient-to-br hover:text-white hover:from-indigo-500 hover:via-sky-600 hover:to-blue-700 block active:from-purple-950 active:via-red-700 active:to-yellow-600' href={createURL(cat.slug)}>{cat.name.toUpperCase()}</Link>)
                ) : (
                    <span>Нет данных...</span>
                )}
            </div>
        </div>
    )
}

export default CatalogDropdown