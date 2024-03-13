import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type } from 'os'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useLogin from '../../hooks/auth/useLogin'
import { montserrat } from '../../styles/fonts'
import { FetchError } from '../../types'
import cookie from 'js-cookie'
import { UseMutationResult } from 'react-query'
import Title from './title'
import Button from './button'

export type AuthInputs = {
    email: string,
    password: string,
    username?: string,
    phone?: string,
}

const Auth = ({ authPage, useHook }: {
    authPage: string,
    useHook: () => UseMutationResult<any, unknown, AuthInputs | undefined>
}) => {
    const [showPassword, setShowPassword] = useState(false)
    const mutation = useHook()
    const router = useRouter()
    const token = cookie.get('jwt');

    const isSignup = authPage === 'signup';

    if (isSignup && !token) {
        router.replace('/');
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthInputs>()

    const onSubmit: SubmitHandler<AuthInputs> = (data) => {
        mutation.mutate(data)
    }

    const err = mutation.error as FetchError;
    const invalidCredentials = err?.res?.status === 401;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${montserrat.className} flex flex-col gap-8  justify-start items-center px-10 py-5 my-3 w-fit min-h-[80dvh] ounded-sm border border-gray-200 bg-white shadow-lg rounded-2xl`}>
            <Title isSignup={isSignup} invalidCredentials={invalidCredentials} />
            {isSignup ? (
                <>
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
                </>
            ) : ''}
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
            <Button isSignup={isSignup} />
        </form>
    )
}

export default Auth