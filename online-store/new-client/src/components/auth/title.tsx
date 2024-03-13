import Link from 'next/link'
import React from 'react'

const Title = ({ isSignup, invalidCredentials }: { isSignup: boolean, invalidCredentials: boolean }) => {
    return isSignup ? (
        <div className='font-bold text-5xl text-center text-gray-600 mt-20 h-[65px]'>
            Регистрация
            <div className='w-96 text-center font-medium text-[1rem] mt-[5px]'>
                <p>Уже есть аккаунт?
                    <Link href="/auth" className='text-violet-600 hover:text-violet-400'>
                        Войдите</Link>
                </p>
            </div>
        </div>

    ) : (
        <>
            <div className='font-bold text-5xl text-center text-gray-600 mt-20 h-[65px]'>
                Вход
            </div>
            {invalidCredentials ? <div className='text-red-500 text-center absolute top-[160px]'>Неверный email или пароль</div> : ''}
        </>
    )
}

export default Title