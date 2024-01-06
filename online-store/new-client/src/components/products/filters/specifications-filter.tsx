import { useSpecifications } from '@/hooks/useSpecifications';
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent } from 'react'

const SpecificationsFilter = ({ onFilterChange, increment }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void, increment: (toIncrement: boolean) => void }) => {
    const searchParams = useSearchParams();
    const selectedCategories = searchParams.get('category')
    const selectedspecifications = searchParams.get('specifications')?.split(';')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e, 'specifications')
        if (e.target.checked) {
            increment(true)
        } else {
            increment(false)
        }
    }

    const { data: specifications } = useSpecifications(selectedCategories ?? undefined)
    return specifications ? (
        <>
            {specifications?.map((spec) =>
            (<div key={spec.name} >
                <h2 className='font-bold mb-2'>{spec.name}</h2>
                {spec.values.map(option => (
                    <div key={option.id} className='ml-2'>{
                        !!selectedspecifications?.length ?
                            (<input defaultChecked={!!selectedspecifications?.includes(option.name)} onChange={onChange} className='mr-2 scale-125 cursor-pointer' type="checkbox" name='specification' value={option.description} id={option.id.toString()} />) :
                            (<input onChange={onChange} className='mr-2 scale-125 cursor-pointer' type="checkbox" name='specification' value={option.description} id={option.id.toString()} />)
                    }
                        <label htmlFor={option.id.toString()}>{option.description}</label>
                    </div>
                ))}
            </div>
            ))}
        </>
    ) : null
}

export default SpecificationsFilter