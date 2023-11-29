import filterService from '@/services/filter.service';
import React, { ChangeEvent, useState } from 'react'
import BrandsFilter from './brands-filter';
import CategoriesFilter from './categories-filter';
import CharacteristicsFilter from './characteristics-filter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CurrencyEuroIcon } from '@heroicons/react/24/solid';

const Filter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const router = useRouter();
  const [count, setCount] = useState<number>(0)
  
  const onChange = (e: ChangeEvent<HTMLInputElement>, searchParam:string) => filterService.handleFilterChange(e, params, router, searchParam);

  const onClick = () => {
    router.push(`${pathName}?${params.toString()}`);
  }

  const increment = (toIncrement: boolean) => {
    setCount(current => toIncrement ? current + 1 : current - 1)
  }

  return (
    <div className='flex flex-col sticky top-16 text-lg gap-4 bg-white w-1/4 ml-10 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 px-10 py-7'>
      <CategoriesFilter onFilterChange={onChange} 
      increment={increment} />    
      <BrandsFilter onFilterChange={onChange}  />
      <CharacteristicsFilter onFilterChange={onChange} />
      {(<div className='sticky text-center bottom-2 rounded-md bg-black text-white p-2 hover:cursor-pointer hover:shadow-lg hover:shadow-violet-400/50' onClick={onClick}>Применить ({count})</div>)}
    </div>
  )
}

export default Filter