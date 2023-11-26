import React, { useState, ChangeEvent } from 'react'
import NoItems from './no-items'
import { productsList } from '@/types'
import Filter from './filters/filter'
import FilterService from '@/services/firter.service'
import { montserrat } from '@/styles/fonts'
import { useSearchParams } from 'next/navigation'
import Pagination from './pagination'
import ProductsList from './products-list'

const Catalog = ({ products, categoryId, totalProducts }: { products: productsList, categoryId?: string, totalProducts?: number }) => {
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<string[]>([]);
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)


  const handleCharacteristicsChange = (e: ChangeEvent<HTMLInputElement>) => {
    FilterService.handleChange(e, setSelectedCharacteristics, selectedCharacteristics)
  }

  if (selectedCharacteristics.length > 0) {
    for (let i = 0; i < selectedCharacteristics.length; i++) {
      products = products.filter(prod => prod.characteristics.some(char => selectedCharacteristics[i] === char.value))
    }
  }

  return (
    <div className={`${montserrat.className} flex flex-row w-full justify-center h-max gap-4 items-start my-3 text-gray-700`}>
      <Filter categoryId={categoryId}
        handleCharacteristicsChange={handleCharacteristicsChange}/>
      {products?.length ? (
        <div className='flex flex-col gap-2 w-2/3 min-h-fit mr-10'>
          <ProductsList products={products} />
          <Pagination totalProducts={totalProducts} />
        </div>
      ) : (<NoItems query={params.get('query')?.toString()} />)}
    </div>
  )
}

export default Catalog