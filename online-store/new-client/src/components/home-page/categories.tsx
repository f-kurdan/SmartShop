import Link from 'next/link'
import React from 'react'
import { categories } from '../../data'
import { useSearchParams } from 'next/navigation';

const Categories = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const createURL = (categoryId: number | string) => {
      params.set('category', categoryId.toString());
        return `/catalog/?${params.toString()}`;
      };
    
  return (
    <div className='flex flex-wrap justify-evenly gap-6 max-w-3xl mt-8 mb-14 relative '>
      {categories.map((cat) => (
        <Link key={cat.id} href={`${createURL(cat.id)}`}>
          <div className='w-60 flex flex-col justify-center items-center p-7 bg-white  min-w-fit rounded-3xl shadow-lg shadow-black/30 transition duration-500 hover:scale-105 hover:cursor-pointer ' >
            <img className='w-32 h-32 transition duration-500 opacity-70 hover:opacity-100' src={cat.src} alt="category" />
            <div className='mt-3 text-base text-center uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-sky-600 to-blue-700 ' >{cat.name}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Categories