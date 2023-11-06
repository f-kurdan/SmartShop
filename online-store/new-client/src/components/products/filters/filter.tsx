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
    <div className='flex flex-col text-sm gap-4 bg-slate-50 w-1/4 ml-10 rounded-xl shadow-lg shadow-black/30 px-10 py-7'>
      {!categoryId && (<CategoriesFilter handleCategoriesChange={handleCategoriesChange} />)}      
      <BrandsFilter handleBrandsChange={handleBrandsChange} />
      <CharacteristicsFilter categoryId={categoryId}
        handleCharacteristicsChange={handleCharacteristicsChange}
      />
    </div>
  )
}

export default Filter