import React, { useState } from 'react'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

import { montserrat } from '../../../styles/fonts'
import { SubmitHandler, useForm } from 'react-hook-form'
import useCreateUser from '../../../hooks/users/useCreateUser'
import Link from 'next/link'

type Inputs = {
  username: string,
  email: string,
  phone: string,
  password: string
}

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const mutation = useCreateUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    if (data.username) {
      formData.append('username', data.username);
    }
    if (data.phone) {
      formData.append('phone', data.phone);
    }
    if (data.email) {
      formData.append('email', data.email);
    }
    if (data.password) {
      formData.append('password', data.password);
    }

    mutation.mutate(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${montserrat.className} flex flex-col gap-8  justify-start items-center px-10 py-5 my-3 w-fit min-h-[80dvh] ounded-sm border border-gray-200 bg-white shadow-lg rounded-2xl`}>
      <div className='font-bold text-5xl text-center text-gray-600 mt-20 h-[65px]'>
        Регистрация
        <div className='w-96 text-center font-medium text-[1rem] mt-[5px]'>
          <p>Уже есть аккаунт? <Link href="/auth" className='text-violet-600 hover:text-violet-400'>
            Войдите</Link>
          </p>
        </div>
      </div>
      <label className='flex flex-col w-96 gap-2'>
        <p className={`${errors.username ? "after:content-['_*'] after:text-red-500" : ''}`}>Имя</p>
        <input
          type="text"
          className={`bg-slate-100 rounded-2xl p-4 focus:bg-slate-200 focus:outline-none`} placeholder='Grzegorz Brzęczyszczykiewicz'
          {...register('username', {
            required: true, minLength: {
              value: 3,
              message: "Имя должно содержать минимум 3 символа"
            },
            maxLength: {
              value: 30,
              message: "Имя должно содержать максимум 30 символов"
            }
          })} />
        {errors.username && <p className='text-red-500 text-center'>{errors.username.message}</p>}
      </label>
      <label className='flex flex-col w-96 gap-2'>
        <p className={`${errors.phone ? "after:content-['_*'] after:text-red-500" : ''}`}>Номер телефона</p>
        <input
          type="tel"
          className={`bg-slate-100 rounded-2xl p-4 focus:bg-slate-200 focus:outline-none`} placeholder='8 999 999 99 99'
          {...register('phone', {
            required: true,
            pattern: {
              value: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
              message: "Неверный формат"
            },
          }
          )} />
        {errors.phone && <p className='text-red-500 text-center'>{errors.phone.message}</p>}
      </label>
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
      <button className='transition-all duration-400 col-span-2 w-96 gap-2 bg-violet-600 rounded-2xl p-4 text-white  hover:bg-violet-800 cursor-pointer active:blur-sm '>
        <p className='text-center'>Создать аккаунт</p>
      </button>
    </form>
  )
}

export default Signup