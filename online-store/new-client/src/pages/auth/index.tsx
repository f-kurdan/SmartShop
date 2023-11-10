import { montserrat } from '@/styles/fonts'
import React from 'react'

const Login = () => {
  return (
    <div className={`${montserrat.className} flex flex-col gap-10  justify-start items-center px-10 py-5 my-3 w-11/12 h-screen ounded-sm border border-gray-200 bg-white shadow-lg rounded-2xl`}>
      <div className='font-bold text-5xl text-center text-gray-600 mt-20'>
        Вход
      </div>
      <div className='flex flex-col w-2/5 gap-2'>
        <h1 className=''>Email*</h1>
        <input type="email" className='bg-slate-100 rounded-lg p-4  focus:bg-slate-200 focus:outline-none' placeholder='qwerty@pochta.ru' />
      </div>
      <div className='flex flex-col w-2/5 gap-2'>
        <h1 className=''>Пароль*</h1>
        <input type="password" className='bg-slate-100 rounded-lg p-4 focus:bg-slate-200 focus:outline-none' placeholder='Введите пароль' />
        <div className='grid grid-cols-2 gap-2 text-violet-800 font-medium'>
          <div>
            <input type="checkbox" id='save' className='hover:cursor-pointer mr-3 scale-125' />
            <label htmlFor="save" className='hover:cursor-pointer'>Запомнить меня</label>
          </div>
          <div className='text-end hover:cursor-pointer'>
            <a href="." >Забыли пароль?</a>
          </div>
        </div>
      </div>
      <div className='transition-all duration-400 col-span-2  w-2/5 gap-2 bg-violet-600 rounded-lg p-4 text-white  hover:bg-violet-800 hover:cursor-pointer active:blur-sm'>
        <h1 className='text-center'>Войти</h1>
      </div>
      <div className='col-span-2  w-2/5 text-center'>
        <p>Нет аккаунта? <a href="." className='text-violet-600 hover:text-violet-400'>Создать аккаунт</a> </p>
      </div>
    </div>
  )
}

export default Login