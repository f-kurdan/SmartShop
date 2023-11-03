import { brands } from '@/types'
import React from 'react'

const BrandsFilter = ({brands, handleBrandsChange: handleBrandsChange}:{brands:brands, handleBrandsChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) => {
  return (
    <div>
      <h2 className='font-bold mb-2'>Бренд</h2>
      {brands?.map(brand =>
      (<div key={brand.id} className='ml-2'>
        <input onChange={handleBrandsChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" id={brand.name} value={brand.id}/>
        <label htmlFor={brand.name}>{brand.name}</label>
      </div>))}
    </div>
  )
}

export default BrandsFilter