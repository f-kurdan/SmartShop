import React, { useState, ChangeEvent } from 'react'
import NoItems from './no-items'
import { productsList } from '@/types'
import Filter from './filters/filter'
import { montserrat } from '@/styles/fonts'
import { useSearchParams } from 'next/navigation'
import Pagination from './pagination'
import ProductsList from './products-list'
import GoToTopButton from './go-to-top-button'

const Catalog = ({ products, totalPages }: { products: productsList, totalPages: number }) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  return (
    <div className={`${montserrat.className} flex flex-row relative w-full justify-center min-h-[80vh] gap-4 items-start my-3 text-gray-700`}>
      <Filter />
      {products?.length ? (
        <div className='flex flex-col gap-2 w-2/3 min-h-fit mr-10'>
          <ProductsList products={products} />
          <Pagination totalPages={totalPages} />
        </div>
      ) : (<NoItems query={params.get('query')?.toString()} />)}
      <GoToTopButton />
    </div>
  )
}

export default Catalog