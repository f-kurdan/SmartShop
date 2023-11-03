import { useBrands } from '@/hooks/useBrands';
import { useCharacteristics } from '@/hooks/useCharacteristics';
import React from 'react'
import BrandsFilter from './brands-filter';

const checkboxStyle = 'mr-2 scale-125 hover:cursor-pointer';

const Filter = ({categoryId, handleChange, handleBrandsChange}:{
  categoryId:string, 
  handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
  handleBrandsChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}) => {
  const { data: brands } = useBrands()
  const { data: characteristics} = useCharacteristics(categoryId)
  
  return (
    <div className='flex flex-col gap-4 bg-white w-1/4 ml-10 rounded-xl shadow-lg shadow-black/30 px-10 py-7'>
       <BrandsFilter brands={brands}
       handleBrandsChange={handleBrandsChange}
         />
        {characteristics?.map(char => 
        (<div>          
          <h2 key={char.id} className='font-bold mb-2'>{char.charactehcisticName}</h2>
          {char.options.map(option => (
            <div className='ml-2'>
            <input onChange={handleChange} className={checkboxStyle} type="checkbox" value={option.name} id={option.name}/>
            <label htmlFor={option.name}>{option.name}</label>
          </div>
          ))}
        </div>                  
          ))}      
    </div>
  )
}

export default Filter