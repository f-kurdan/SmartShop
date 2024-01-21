import React from 'react'
import useCategories from '../../../../hooks/categories/useCategories'
import Image from 'next/image';

const List = () => {
  const { data } = useCategories();
    
  return (
    <ul className='flex flex-col gap-4 w-full h-full'>
      {data?.map(category => (
        <li className='flex flex-row justify-start items-center gap-5 border-2 border-gray-400 p-3 h-[100px] rounded-md' key={category.id}>
          <span className='min-w-[100px]'>
          {category.name}
          </span>
          <Image className='max-w-[100%] max-h-[100%] object-cover rounded-md' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${category.image}`} alt={category.name} width={100} height={100} />
        </li>
      ))}      
    </ul>
  )
}

export default List