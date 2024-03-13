import Link from 'next/link'
import React from 'react'

const Button = ({ isSignup }: { isSignup: boolean }) => {
    return isSignup ? (
        <button className='transition-all duration-400 col-span-2 w-96 gap-2 bg-violet-600 rounded-2xl p-4 text-white  hover:bg-violet-800 cursor-pointer active:blur-sm '>
            <p className='text-center'>Создать аккаунт</p>
        </button>
    ) : (
        <div className='col-span-2'>
            <button className='transition-all duration-400 w-96 gap-2 bg-violet-600 rounded-2xl p-4 text-white  hover:bg-violet-800 cursor-pointer active:blur-sm '>
                <p className='text-center'>Войти</p>
            </button>
            <div className='w-96 text-center'>
                <p>Нет аккаунта?
                    <Link href="/auth/signup" className='text-violet-600 hover:text-violet-400'>
                        Создать аккаунт</Link>
                </p>
            </div>
        </div>
    )
}

export default Button