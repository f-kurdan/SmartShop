import { useCharacteristics } from '@/hooks/useCharacteristics'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent } from 'react'
import FilterService from '@/services/firter.service'

const CharacteristicsFilter = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathName = usePathname()
    const router = useRouter()
    const selectedCategories = searchParams.get('category')?.split(',')
    const selectedCharacteristics = searchParams.get('characteristics')?.split(',')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => FilterService.handleFilterChange(e, params, pathName, router, 'characteristics');

    const { data: characteristics } = useCharacteristics(selectedCategories)
    return (
        <>
            {characteristics?.map(char =>
            (<div>
                <h2 key={char.id} className='font-bold mb-2'>{char.charactehcisticName}</h2>
                {char.options.map(option => (
                    <div className='ml-2'>
                        <input className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='characteristic' value={option.name} id={option.name} />
                        <label htmlFor={option.name}>{option.name}</label>
                    </div>
                ))}
            </div>
            ))}
        </>
    )
}

export default CharacteristicsFilter