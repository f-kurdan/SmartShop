import { useBrands } from '@/hooks/useBrands'
import { brands } from '@/types'
import React from 'react'

const BrandsFilter = ({handleBrandsChange: handleBrandsChange}:{handleBrandsChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) => {
  const { data: brands } = useBrands()

  return (
    <div>
      <h2 className='font-bold mb-2'>Бренд</h2>
      {brands?.map(brand =>
      (<div key={brand.id} className='ml-2'>
        <input onChange={handleBrandsChange} className='mr-2 scale-125 hover:cursor-pointer' name='brand' type="checkbox" id={brand.id.toString()} value={brand.name}/>
        <label htmlFor={brand.name}>{brand.name}</label>
      </div>))}
    </div>
  )
}

export default BrandsFilter