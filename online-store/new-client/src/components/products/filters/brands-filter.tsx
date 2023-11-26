import { useBrands } from '@/hooks/useBrands'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent } from 'react'
import FilterService from '@/services/firter.service'


const BrandsFilter = () => {
  const { data: brands } = useBrands()
  const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathName = usePathname()
    const router = useRouter()
    const selectedBrands = searchParams.get('brand')?.split(',');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => FilterService.handleFilterChange(e, params, pathName, router, 'brand');

  return (
    <div>
      <h2 className='font-bold mb-2'>Бренд</h2>
      {brands?.map(brand =>
      (<div key={brand.id} className='ml-2'>
        <input checked={!!selectedBrands?.includes(brand.id.toString())} onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' name='brand' type="checkbox" id={brand.id.toString()} value={brand.name}/>
        <label htmlFor={brand.name}>{brand.name}</label>
      </div>))}
    </div>
  )
}

export default BrandsFilter