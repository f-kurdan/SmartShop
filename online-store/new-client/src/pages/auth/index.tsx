import { montserrat } from '@/styles/fonts'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useLogin from '../../hooks/auth/useLogin'
import { FetchError } from '../../types'

type Inputs = {
  email: string,
  password: string
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const mutation = useLogin()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    if (data.email) {
      formData.append('email', data.email);
    }
    if (data.password) {
      formData.append('password', data.password);
    }

    mutation.mutate(formData)
  }

  const err = mutation.error as FetchError;
  const invalidCredentials = err?.res?.status === 401;
  console.log('invalidCredentials', invalidCredentials)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`relative ${montserrat.className} flex flex-col gap-8  justify-start items-center px-10 py-5 my-3 w-fit h-[80dvh] ounded-sm border border-gray-200 bg-white shadow-lg rounded-2xl`}>
      <div className='font-bold text-5xl text-center text-gray-600 mt-20 h-[65px]'>
        Вход
      </div>
      {invalidCredentials ? <div className='text-red-500 text-center absolute top-[160px]'>Неверный email или пароль</div> : ''}
      <label className='flex flex-col w-96 gap-2'>
        <p className={`${errors.email ? "after:content-['_*'] after:text-red-500" : ''}`}>Email</p>
        <input
          type="email"
          className={`bg-slate-100 rounded-2xl p-4 focus:bg-slate-200 focus:outline-none`} placeholder='qwerty@pochta.ru'
          {...register('email', { required: true })} />
      </label>
      <label className='flex flex-col w-96 gap-2 relative'>
        <p className={`${errors.password ? "after:content-['_*'] after:text-red-500" : ''}`}>Пароль</p>
        <input
          type={showPassword ? 'text' : 'password'}
          className={`bg-slate-100 rounded-2xl p-4 focus:bg-slate-200 focus:outline-none`}
          placeholder='Введите пароль'
          {...register('password', {
            required: true, minLength: {
              value: 6,
              message: "Пароль должен содержать минимум 6 символов"
            },
            maxLength: { value: 20, message: "Пароль должен содержать максимум 20 символов" },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
              message: "Пароль должен содержать цифры, строчные и заглавные буквы"
            }
          })} />
        {errors.password && <p className='text-red-500 text-center'>{errors.password.message}</p>}
        {showPassword ? <EyeSlashIcon width={20} height={20} className='cursor-pointer absolute right-4 top-[60px] translate-y-[-50%]' onClick={() => setShowPassword(!showPassword)} /> :
          <EyeIcon width={20} height={20} className='cursor-pointer absolute right-4 top-[60px] translate-y-[-50%]' onClick={() => setShowPassword(!showPassword)} />}
      </label>
      <div className='col-span-2'>
        <button className='transition-all duration-400 w-96 gap-2 bg-violet-600 rounded-2xl p-4 text-white  hover:bg-violet-800 cursor-pointer active:blur-sm '>
          <p className='text-center'>Войти</p>
        </button>
        <div className='w-96 text-center'>
          <p>Нет аккаунта? <Link href="/auth/signup" className='text-violet-600 hover:text-violet-400'>
            Создать аккаунт</Link>
          </p>
        </div>
      </div>
    </form>
  )
}

export default Login