import { montserrat } from '@/styles/fonts'
import React from 'react'

const Login = () => {
  return (
    <div className={`${montserrat.className} flex flex-col gap-12  justify-center items-center px-10 py-5 my-3 w-11/12 ounded-sm border border-gray-200 bg-white shadow-lg rounded-2xl`}>
      <div className='font-bold text-5xl text-center text-gray-600 '>
        Вход
      </div>
        <div className='flex flex-col w-2/5 gap-2'>
            <h1 className='text-gray-600'>Email*</h1>
              <input type="email" className='bg-slate-100 rounded-lg p-4  focus:bg-slate-200 focus:outline-none' placeholder='qwerty@pochta.ru'/>
        </div>
        <div className='flex flex-col w-2/5 gap-2'>
            <h1 className='text-gray-600'>Пароль*</h1>
              <input type="password" className='bg-slate-100 rounded-lg p-4 focus:bg-slate-200 focus:outline-none' placeholder='Введите пароль'/>
        </div>        
    </div>
  )
}

export default Login