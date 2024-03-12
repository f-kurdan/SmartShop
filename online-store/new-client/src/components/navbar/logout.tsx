import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react'

const Logout = () => {
    const router = useRouter()
    
    const handleLogout = () => {
        cookie.remove('jwt')
        router.refresh()
    }

    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className=' text-black text-center w-48 text-base'>Вы хотите выйти?</div>
            <span onClick={handleLogout} className=' text-center text-white w-20 block rounded-lg p-2 bg-blue-600 active:bg-blue-400 active:blur-sm'>
                Да!
            </span>
        </div>
    )
}

export default Logout