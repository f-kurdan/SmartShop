import { useBrands } from '@/hooks/useBrands';
import { useCharacteristics } from '@/hooks/useCharacteristics';
import React from 'react'
import BrandsFilter from './brands-filter';
import CategoriesFilter from './categories-filter';
import CharacteristicsFilter from './characteristics-filter';

const Filter = ({ categoryId, handleCharacteristicsChange: handleChange, handleBrandsChange, handleCategoriesChange }: {
  categoryId?: string,
  handleCharacteristicsChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleBrandsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCategoriesChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const { data: brands } = useBrands()
  const { data: characteristics } = useCharacteristics(categoryId)
  console.log('charact: ' + characteristics)
  return (
    <div className='flex flex-col text-sm gap-4 bg-white w-1/4 ml-10 rounded-xl shadow-lg shadow-black/30 px-10 py-7'>
      <CategoriesFilter
        handleCategoriesChange={handleCategoriesChange} />
      <BrandsFilter brands={brands}
        handleBrandsChange={handleBrandsChange} />
      <CharacteristicsFilter
        characteristics={characteristics}
        handleChange={handleChange}
      />
    </div>
  )
}

export default Filter