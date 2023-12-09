import { useSpecifications } from '@/hooks/useSpecifications';
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent } from 'react'

const SpecificationsFilter = ({ onFilterChange, increment }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void, increment: (toIncrement: boolean) => void }) => {
    const searchParams = useSearchParams();
    const selectedCategories = searchParams.get('category')?.split(';')
    const selectedspecifications = searchParams.get('specifications')?.split(';')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e, 'specifications')
        if (e.target.checked) {
            increment(true)
        } else {
            increment(false)
        }
    }

    const { data: specifications } = useSpecifications(selectedCategories)
    return (
        <>
            {specifications?.map(char =>
            (<div>
                <h2 key={char.id} className='font-bold mb-2'>{char.specificationName}</h2>
                {char.options.map(option => (
                    <div className='ml-2'>{
                        !!selectedspecifications?.length ?
                            (<input defaultChecked={!!selectedspecifications?.includes(option.name)} onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='specification' value={option.name} id={option.name} />) :
                            (<input onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='specification' value={option.name} id={option.name} />)
                    }
                        <label htmlFor={option.name}>{option.name}</label>
                    </div>
                ))}
            </div>
            ))}
        </>
    )
}

export default SpecificationsFilter