import useColors from '@/hooks/useColors'
import { useSearchParams } from 'next/navigation';
import React, {ChangeEvent} from 'react'

const ColorsFilter = ({ onFilterChange, increment }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void, increment: (toIncrement: boolean) => void }) => {
    const { data } = useColors();
    const searchParams = useSearchParams();
    const selectedColors = searchParams.get('color')?.split(';');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e, 'color')
        if (e.target.checked) {
            increment(true)
          } else {
            increment(false)
          }
    }

    return (
        <div>
            <h2 className='font-bold mb-2'>Цвет</h2>
            {data?.map(color =>
            (<div key={color.id} className='ml-2'>
                <input defaultChecked={!!selectedColors?.includes(color.id.toString())} onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' name='brand' type="checkbox" id={color.id.toString()} value={color.name} />
                <label htmlFor={color.name}>{color.name}</label>
            </div>))}
        </div>
    )
}

export default ColorsFilter