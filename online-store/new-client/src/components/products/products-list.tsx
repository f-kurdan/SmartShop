import Image from 'next/image'
import React, { useState, ChangeEvent } from 'react'
import NoItems from './no-items'
import { productsList } from '@/types'
import Filter from './filters/filter'
import FilterService from '@/services/firter.service'
import Link from 'next/link'
import { montserrat } from '@/styles/fonts'
import { useSearchParams } from 'next/navigation'

const ProductsList = ({ products, categoryId }: { products: productsList, categoryId?: string }) => {
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)


  const handleCharacteristicsChange = (e: ChangeEvent<HTMLInputElement>) => {
    FilterService.handleChange(e, setSelectedCharacteristics, selectedCharacteristics)
  }

  const handleBrandsChange = (e: ChangeEvent<HTMLInputElement>) => {
    FilterService.handleChange(e, setSelectedBrands, selectedBrands)
  }

  const handleCategoriesChange = (e: ChangeEvent<HTMLInputElement>) => {
    FilterService.handleChange(e, setSelectedCategories, selectedCategories)
  }

  // products = FilterService.filterProducts(products);

  if (selectedCategories.length > 0) {
    products = products.filter(product => selectedCategories.includes(product.category_id.toString()))
  }

  if (selectedBrands.length > 0) {
    products = products.filter(product => selectedBrands.includes(product.brand_id.toString()))
  }

  if (selectedCharacteristics.length > 0) {
    for (let i = 0; i < selectedCharacteristics.length; i++) {
      products = products.filter(prod => prod.characteristics.some(char => selectedCharacteristics[i] === char.value))
    }
  }

  return (
    <div className={`${montserrat.className} flex flex-row w-full justify-center h-max gap-4 items-start my-3 text-gray-700`}>
      <Filter categoryId={categoryId}
        handleCharacteristicsChange={handleCharacteristicsChange}
        handleBrandsChange={handleBrandsChange}
        handleCategoriesChange={handleCategoriesChange} />
      {products?.length ? (
        <div className='flex flex-row flex-wrap justify-start items-center gap-2 w-2/3 min-h-fit mr-10'>
          {products.map((product) =>
          (<Link href={`/products/${product.id}`}> 
            <div key={product.id} className='flex flex-col gap-2 w-72 justify-center items-center p-5 bg-white  rounded-xl shadow-lg shadow-black/30 hover:cursor-pointer active:opacity-80'>
              <Image className='max-w-48 max-h-48' src={product.photo} alt={product.name} width={160} height={160} />
              <p className='text-sm text-center  hover:text-blue-600 active:text-lime-400 '>{product.name}</p>
              <p className='text-md text-center font-bold'>{product.price}</p>
            </div>
          </Link>)
          )}
        </div>
      ) : (<NoItems query={params.get('query')?.toString()} />)}
    </div>
  )
}

export default ProductsList