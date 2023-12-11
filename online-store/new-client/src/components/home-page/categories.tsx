import Link from 'next/link'
import React from 'react'
import { categories } from '../../data'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Categories = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const createURL = (categoryId: number | string) => {
    params.set('category', categoryId.toString());
    return `/catalog/?${params.toString()}`;
  };

  return (
    <div className='flex flex-wrap justify-center gap-5 max-w-3xl mt-8 mb-14 relative '>
      {categories.map((cat) => (
        <div key={cat.id} className='relative group max-w-[300px] max-h-[300px] rounded-3xl overflow-hidden cursor-pointer '>
          <Link href={`${createURL(cat.id)}`}>
            <Image className='rounded-3xl object-cover transition duration-500 group-hover:scale-110 group-hover:blur-sm' src={cat.src} alt="category" width={400} height={400} />
            <div className='absolute transition duration-500 text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 group-hover:opacity-100' >{cat.name}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories