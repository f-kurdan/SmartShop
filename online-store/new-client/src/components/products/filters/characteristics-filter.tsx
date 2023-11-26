import { useCharacteristics } from '@/hooks/useCharacteristics'
import React from 'react'

const CharacteristicsFilter = ({ categoryId, handleCharacteristicsChange }: { categoryId?: string, handleCharacteristicsChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    console.log('это здесь '+ categoryId)

    const { data: characteristics } = useCharacteristics(categoryId)
    return (
        <>
            {characteristics?.map(char =>
            (<div>
                <h2 key={char.id} className='font-bold mb-2'>{char.charactehcisticName}</h2>
                {char.options.map(option => (
                    <div className='ml-2'>
                        <input onChange={handleCharacteristicsChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" name='characteristic' value={option.name} id={option.name} />
                        <label htmlFor={option.name}>{option.name}</label>
                    </div>
                ))}
            </div>
            ))}
        </>
    )
}

export default CharacteristicsFilter