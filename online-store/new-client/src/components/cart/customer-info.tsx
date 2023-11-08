import React from 'react'

const CustomerInfo = () => {
  return (
    <div className='flex flex-col justify-start p-2'>
      <h3>Основная информация</h3>
      <hr />
      <div className='grid grid-cols-2 gap-2 mt-2'>
        <label htmlFor='name' className=''>ФИО</label>
        <input type="text" id='name' name="info" className='border border-solid border-gray-200 shadow-inner px-1' />
        <label htmlFor='email' className=''>E-mail</label>
        <input type="email" id='email' name="info" className='border border-solid border-gray-200 shadow-inner px-1' />
        <label htmlFor='number'>Телефон</label>
        <input type="tel" id="number" name="info" className='border border-solid border-gray-200 shadow-inner px-1' />
      </div>
    </div>
  )
}

export default CustomerInfo