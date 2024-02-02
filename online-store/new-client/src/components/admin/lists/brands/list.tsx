import React, { memo, useState } from 'react'
import useCategories from '../../../../hooks/categories/useCategories'
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/solid';
import useDeleteCategory from '../../../../hooks/categories/useDeleteCategory';
import useBrands from '../../../../hooks/brands/useBrands';
import useDeleteBrand from '../../../../hooks/brands/useDeleteBrand';

const BrandsList = memo(({ blur }: { blur: boolean }) => {
  const [toChange, setToChange] = useState<Number>();
  const { data } = useBrands()

  const mutation = useDeleteBrand()

  const onChangeButtonClick = (id: number) => {
    setToChange(id)
  }

  const handleDelete = (id: number) => {
    mutation.mutate(id)
  }

  return (
    <ul className={`${blur ? "blur-md" : ""} flex flex-col gap-4 w-full h-full`}>
      {data?.map(category => toChange === category.id ?
        (<li>
{/*<CategoryUpdateForm 
          id={category.id}
          defaultName={category.name} />*/}
        </li>) :
        (<li className='flex flex-row justify-start items-center gap-5 border-2 border-gray-400 p-3 h-[100px] rounded-md' key={category.id}>
          <span className='min-w-[100px]'>
            {category.name}
          </span>
          <span onClick={() => { onChangeButtonClick(category.id) }} className='p-2 bg-yellow-200 rounded-md cursor-pointer justify-self-end'>Изменить</span>
          <TrashIcon onClick={() => handleDelete(category.id)} color='red' className='w-6 h-6 cursor-pointer justify-self-end' />
        </li>)
      )}
    </ul>
  )
})

export default BrandsList