import { useCharacteristics } from '@/hooks/useCharacteristics'
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent } from 'react'

const CharacteristicsFilter = ({ onFilterChange }: { onFilterChange: (e: ChangeEvent<HTMLInputElement>, searchParam: string) => void }) => {
    const searchParams = useSearchParams();
    const selectedCategories = searchParams.get('category')?.split(';')
    const selectedCharacteristics = searchParams.get('characteristics')?.split(';')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e, 'characteristics')
    }

    const { data: characteristics } = useCharacteristics(selectedCategories)
    return (
        <>
            {characteristics?.map(char =>
            (<div>
                <h2 key={char.id} className='font-bold mb-2'>{char.charactehcisticName}</h2>
                {char.options.map(option => (
                    <div className='ml-2'>{
                        !!selectedCharacteristics?.length ?
                            (<input defaultChecked={!!selectedCharacteristics?.includes(option.name)} onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='characteristic' value={option.name} id={option.name} />) :
                            (<input onChange={onChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='characteristic' value={option.name} id={option.name} />)
                    }
                        <label htmlFor={option.name}>{option.name}</label>
                    </div>
                ))}
            </div>
            ))}
        </>
    )
}

export default CharacteristicsFilter