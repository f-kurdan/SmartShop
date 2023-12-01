import filterService from '@/services/filter.service';
import React, { ChangeEvent, useRef, useState } from 'react'
import BrandsFilter from './brands-filter';
import CategoriesFilter from './categories-filter';
import CharacteristicsFilter from './characteristics-filter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { CurrencyEuroIcon } from '@heroicons/react/24/solid';
import FilterButton from './filter-button';

const Filter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const router = useRouter();
  const incRef = useRef<(toIncrement: boolean) => void>()

  const onChange = (e: ChangeEvent<HTMLInputElement>, searchParam: string) => {
    console.log(`before render: ${pathName}?${params.toString()}`)
    filterService.handleFilterChange(e, params, router, searchParam);
  }

  const onClick = () => {
    console.log(`after render: ${pathName}?${params.toString()}`)
    router.replace(`${pathName}?${params.toString()}`);
  }

  const increment = (toIncrement: boolean) => {
    if (incRef.current)
      incRef.current(toIncrement)
  }

  const setNewCount = (buttonIncrement?: (toIncrement: boolean) => void) => {
    if (buttonIncrement)
      incRef.current = (toIncrement: boolean) => buttonIncrement(toIncrement)
  }
  console.log('Array.from(params?.values().length): ' + Array.from(params?.values())[0]?.split(';').length);
  return (
    <div className='flex flex-col sticky top-16 text-lg gap-4 bg-white w-1/4 ml-10 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 px-10 py-7'>
      <CategoriesFilter onFilterChange={onChange}
        increment={increment} />
      <BrandsFilter onFilterChange={onChange} />
      <CharacteristicsFilter onFilterChange={onChange} />
      <FilterButton setNewCount={setNewCount}
        onClick={onClick} 
        selectedOptionsCount={Array.from(params?.values())[0]?.split(';').length} />
    </div>
  )
}

export default Filter