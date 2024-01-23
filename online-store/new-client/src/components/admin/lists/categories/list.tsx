import React, { memo } from 'react'
import useCategories from '../../../../hooks/categories/useCategories'
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/solid';
import CategoryUpdateDialog from './category-update-dialog';

const List = memo(({blur}: {blur: boolean}) => {
  const { data } = useCategories();

  const onChangeButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

  }
    
  return (
    <ul className={`${blur ? "blur-md" : ""} flex flex-col gap-4 w-full h-full`}>
      {data?.map(category => (
        <>
        <li className='flex flex-row justify-start items-center gap-5 border-2 border-gray-400 p-3 h-[100px] rounded-md' key={category.id}>
          <span className='min-w-[100px]'>
          {category.name}
          </span>
          <Image className='max-w-[100%] max-h-[100%] object-cover rounded-md' src={`${process.env.NEXT_PUBLIC_STOREAPI_URL}/${category.image}`} alt={category.name} width={100} height={100} />
          <span className='p-2 bg-yellow-200 rounded-md cursor-pointer justify-self-end'>Изменить</span>
          <TrashIcon color='red' className='w-6 h-6 cursor-pointer justify-self-end' />
        </li>
        <li>
          <CategoryUpdateDialog />
        </li>
        </>
      ))}      
    </ul>
  )
})

export default List