import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import useCategories from '../../hooks/categories/useCategories';

const Categories = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { data } = useCategories();

  const createURL = (categoryId: number | string) => {
    params.set('category', categoryId.toString());
    return `/catalog/1?${params.toString()}`;
  };

  return (
    <div className='flex flex-wrap justify-center gap-5 max-w-3xl mt-8 mb-14 relative '>
      {data?.map((cat) => (
        <div key={cat.id} className='relative group min-w-[300px] rounded-3xl overflow-hidden cursor-pointer'>
          <Link href={`${createURL(cat.slug)}`}>
            <Image className='rounded-3xl object-contain transition duration-500 group-hover:scale-110 group-hover:blur-sm' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${cat.image}`} alt="category" width={300} height={300} />
            <div className='absolute transition duration-500 text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center opacity-0 group-hover:opacity-100' >{cat.name}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Categories