import { useBrands } from '@/hooks/useBrands'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { ChangeEvent } from 'react'

const BrandsFilter = () => {
  const { data: brands } = useBrands()
  const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathName = usePathname()
    const { replace } = useRouter()
    const selectedBrands = searchParams.get('brand')?.split(',');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.checked)
      if (e.target.checked) {
          if (params.has('brand')) {
              const prevParams = params.get('brand')?.toString();
              params.set('brand', !!prevParams ? `${prevParams},${e.target.id}` : `${e.target.id}`);
          }
          else {
              params.set('brand', e.target.id)
          }
      }
      else {
          let paramsArr = params.get('brand')?.split(',')
          paramsArr = paramsArr?.filter(p => !(p === e.target.id))

          if (paramsArr && paramsArr.length)
              params.set('brand', paramsArr.join(','));
          else
              params.delete('brand')
      }

      params.delete('page')
      replace(`${pathName}?${params.toString()}`);
  };

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