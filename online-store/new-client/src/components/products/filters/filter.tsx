import React from 'react'
import BrandsFilter from './brands-filter';
import CategoriesFilter from './categories-filter';
import CharacteristicsFilter from './characteristics-filter';

const Filter = ({ categoryId, handleCharacteristicsChange, handleBrandsChange, handleCategoriesChange }: {
  categoryId?: string,
  handleCharacteristicsChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleBrandsChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCategoriesChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <div className='flex flex-col sticky top-16 text-lg gap-4 bg-white w-1/4 ml-10 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 px-10 py-7'>
      {!categoryId && (<CategoriesFilter />)}      
      <BrandsFilter handleBrandsChange={handleBrandsChange} />
      <CharacteristicsFilter categoryId={categoryId}
        handleCharacteristicsChange={handleCharacteristicsChange}
      />
    </div>
  )
}

export default Filter