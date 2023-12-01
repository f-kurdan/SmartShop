import filterService from '@/services/filter.service';
import React, { ChangeEvent, useRef, useState } from 'react'
import BrandsFilter from './brands-filter';
import CategoriesFilter from './categories-filter';
import CharacteristicsFilter from './characteristics-filter';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FilterButton from './filter-button';
import ColorsFilter from './colors-filter';
import GenericFilter from './genericFilter';

const Filter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const router = useRouter();
  const incRef = useRef<(toIncrement: boolean) => void>()

  const onChange = (e: ChangeEvent<HTMLInputElement>, searchParam: string) => {
    filterService.handleFilterChange(e, params, router, searchParam);
  }

  const onClick = () => {
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
  return (
    <div className='flex flex-col sticky top-16 text-lg gap-4 bg-white w-1/4 ml-10 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 px-10 py-7'>
      <GenericFilter onFilterChange={onChange}
        increment={increment}
        param={'category'} />
        <GenericFilter onFilterChange={onChange}
        increment={increment}
        param={'brand'} />
        <GenericFilter onFilterChange={onChange}
        increment={increment}
        param={'color'} />
      {/* <CategoriesFilter onFilterChange={onChange}
        increment={increment} />
      <BrandsFilter onFilterChange={onChange}
        increment={increment} />
      <ColorsFilter  onFilterChange={onChange}
        increment={increment} /> */}
      {/* <CharacteristicsFilter onFilterChange={onChange} /> */}
      <FilterButton setNewCount={setNewCount}
        onClick={onClick}
        selectedOptionsCount={Array.from(params?.values())[0]?.split(';').length} />
    </div>
  )
}

export default Filter