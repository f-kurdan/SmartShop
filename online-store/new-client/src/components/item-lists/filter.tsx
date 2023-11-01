import { useBrands } from '@/hooks/useBrands';
import { useCharacteristics } from '@/hooks/useCharacteristics';
import React from 'react'

const checkboxStyle = 'mr-2 scale-125 hover:cursor-pointer';

const Filter = ({categoryId}:{categoryId:string}) => {
  const { data: brands } = useBrands()
  const { data: characteristics} = useCharacteristics(categoryId)

  return (
    <div className='flex flex-col gap-4 bg-white w-1/4 ml-10 rounded-xl shadow-lg shadow-black/30 px-10 py-7'>
        <div>
          <h2 className='font-bold mb-2'>Бренд</h2>
        {brands?.map(brand => 
          (<div key={brand.id} className='ml-2'>
          <input  className={checkboxStyle} type="checkbox" id={brand.name}/>
          <label htmlFor={brand.name}>{brand.name}</label>
        </div>))}  
          </div>
        {characteristics?.map(char => 
        (<div>          
          <h2 key={char.id} className='font-bold mb-2'>{char.charactehcisticName}</h2>
          {char.options.map(option => (
            <div className='ml-2'>
            <input  className={checkboxStyle} type="checkbox" id={option.name}/>
            <label htmlFor={option.name}>{option.name}</label>
          </div>
          ))}
        </div>        
          
          ))}      
    </div>
  )
}

export default Filter