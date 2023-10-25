"use client"
import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react'
import PhonesList from '../lists/phones-list';
const checkboxStyle = 'mr-2 scale-125 hover:cursor-pointer';

const PhonesFilter = ({children}:{children:ReactNode}) => {
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilteredBrands([...filteredBrands, e.target.value])
  }
  return (
    <>
      <div>
        <h2 className='font-bold mb-2'>Бренд</h2>
        <div className='ml-2'>
          <input  className={checkboxStyle} type="checkbox" id='apple' value={'Apple'} />
          <label htmlFor="apple">Apple</label>
        </div>
        <div className='ml-2'>
          <input className={checkboxStyle} type="checkbox" id='samsung' value={"Samsung"} />
          <label htmlFor="samsung">Samsung</label>
        </div>
        <div className='ml-2'>
          <input className={checkboxStyle} type="checkbox" id='xiaomi' value={"Xiaomi"} />
          <label htmlFor="xiaomi">Xiaomi</label>
        </div>
        {children}
      </div>
    </>
  )
}

export default PhonesFilter