import { useBrands } from '@/hooks/useBrands'
import { useSearchParams } from 'next/navigation'
import React, { ChangeEvent } from 'react'


const BrandsFilter = ({ onFilterChange, increment }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void, increment: (toIncrement: boolean) => void }) => {
  const { data: brands } = useBrands()
  const searchParams = useSearchParams();
  const selectedBrands = searchParams.get('brand')?.split(';');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange(e, 'brand')
    if (e.target.checked) {
      increment(true)
    } else {
      increment(false)
    }
  }

  return (
    <div>
      <h2 className='font-bold mb-2'>Бренд</h2>
      {brands?.map(brand =>
      (<div key={brand.id} className='ml-2'>
        <input defaultChecked={!!selectedBrands?.includes(brand.id.toString())} onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' name='brand' type="checkbox" id={brand.id.toString()} value={brand.name} />
        <label htmlFor={brand.name}>{brand.name}</label>
      </div>))}
    </div>
  )
}

export default BrandsFilter