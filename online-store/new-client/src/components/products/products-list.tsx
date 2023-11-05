import Image from 'next/image'
import React, { useState, ChangeEvent } from 'react'
import NoItems from './no-items'
import { productsList } from '@/types'
import Filter from './filters/filter'

const ProductsList = ({ products, categoryId }: { products: productsList, categoryId?: string }) => {
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCharacteristics([...selectedCharacteristics, e.target.value])
    } else {
      setSelectedCharacteristics(selectedCharacteristics.filter(characteristic => characteristic !== e.target.value))
    }
  }

  const handleBrandsChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedBrands([...selectedBrands, e.target.value])
    } else {
      setSelectedBrands(selectedBrands.filter(brand => brand !== e.target.value))
    }
  }

  const handleCategoriesChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, e.target.value])
    } else {
      setSelectedCategories(selectedCategories.filter(category => category !== e.target.value))
    }
  }

  if (selectedCategories.length > 0) {
    products = products.filter(product => selectedCategories.includes(product.category_id.toString()))}

  if (selectedBrands.length > 0) {
      products = products.filter(product => selectedBrands.includes(product.brand_id.toString()))
  }

  if (selectedCharacteristics.length > 0) {
    products = products?.filter(product => selectedCharacteristics.every(selectedChar => product.characteristics.some(productChar => selectedChar === productChar.value)))
  }


  return (
    <div className='flex flex-row justify-around items-start my-3'>
      <Filter categoryId={categoryId}
        handleChange={handleChange}
        handleBrandsChange={handleBrandsChange} 
        handleCategoriesChange={handleCategoriesChange}/>
      {products?.length ? (
        <div className='flex flex-col w-2/3 min-h-fit mr-10'>
          {products.map((item) =>
          (<div key={item.id} className='flex flex-row justify-evenly items-start px-10 py-7 bg-white mb-2 rounded-xl shadow-lg shadow-black/30 '>
            <Image className='max-w-48 max-h-48' src={item.photo} alt={item.name} width={160} height={160} />
            <div className='flex flex-col justify-start items-start text-sm px-3'>
              <p className='mb-5 text-sm font-semibold hover:text-blue-600 hover:cursor-pointer'>{item.name}</p>
              {!!item.characteristics.length && item.characteristics.slice(0, 5).map(char => (
                <p className='mb-3'><span className='font-semibold'>{char.name}: </span>{char.value}</p>
              ))}
            </div>
            <div className='min-w-fit self-end text-center'>
              <p className='border-2 border-black border-solid  p-1 '>
                {item.price}
              </p>
              <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>В корзину</p>
            </div>
          </div>)
          )}
        </div>
      ) : (<NoItems />)}
    </div>
  )
}

export default ProductsList