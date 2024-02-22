import filterService from '@/services/filter.service';
import React, { ChangeEvent, useRef } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FilterButton from './filter-button';
import GenericFilter from './genericFilter';
import SpecificationsFilter from './specifications-filter';

const Filter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathName = usePathname();
  const router = useRouter();
  const incRef = useRef<(toIncrement: boolean) => void>()

  const onChange = (e: ChangeEvent<HTMLInputElement>, searchParam: string) => {
    filterService.handleFilterChange(e, params, searchParam);
    const selectedOptionsCount = Array.from(params?.values())[0]?.split(';').length
    if (!selectedOptionsCount) {
      router.replace(`${pathName}?`);
    }
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
    <div className='flex flex-col sticky top-16 text-base gap-4 bg-white w-1/5 ml-10 transition-all duration-300 hover:shadow-lg hover:shadow-black/30 px-10 py-7'>
      <GenericFilter onFilterChange={onChange}
        increment={increment}
        param={'category'} />
      {/* <GenericFilter onFilterChange={onChange}
        increment={increment}
        param={'brand'} /> */}
      {/* <GenericFilter onFilterChange={onChange}
        increment={increment}
        param={'color'} /> */}
      <SpecificationsFilter onFilterChange={onChange} 
      increment={increment}/>
      <FilterButton setNewCount={setNewCount}
        onClick={onClick}
        selectedOptionsCount={Array.from(params?.values())[0]?.split(';').length} />
    </div>
  )
}

export default Filter