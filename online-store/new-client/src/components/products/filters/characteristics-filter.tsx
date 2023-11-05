import { characteristics } from '@/types'
import React from 'react'

const CharacteristicsFilter = ({characteristics, handleChange}:{characteristics:characteristics, handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <>
            {characteristics?.map(char =>
            (<div>
                <h2 key={char.id} className='font-bold mb-2'>{char.charactehcisticName}</h2>
                {char.options.map(option => (
                    <div className='ml-2'>
                        <input onChange={handleChange} className='mr-2 scale-125 hover:cursor-pointer' type="checkbox" value={option.name} id={option.name} />
                        <label htmlFor={option.name}>{option.name}</label>
                    </div>
                ))}
            </div>
            ))}
        </>
    )
}

export default CharacteristicsFilter