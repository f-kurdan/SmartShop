import React from 'react'

const checkboxStyle = 'mr-2 scale-125 hover:cursor-pointer';

const Filter = () => {
  return (
    <div className='flex flex-col bg-white w-1/4 ml-10 rounded-xl shadow-lg shadow-black/30 px-10 py-7'>
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
      </div>
    </div>
  )
}

export default Filter