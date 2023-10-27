import { category } from '@/types'
import Link from 'next/link'
import React from 'react'

const CatalogDropdown = ({categories}:{categories: category[]}) => {
    return (
        <div className="absolute left-16 group border-black border-2 border-solid p-1 inline-block w-32 text-center">
            <button className="group-hover:opacity-0">Категории</button>
            <div className="absolute w-40 bg-white hidden z-10 transition duration-500 group-hover:block">
                {categories?.map((cat, index) => 
                    (<Link key={index} className='block' href="/catalog">{cat.name}</Link>)
                )}
            </div>
        </div>
    )
}

export default CatalogDropdown