import React from 'react'

const Logout = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className=' text-black text-center w-48 text-base'>Вы хотите выйти?</div>
            <div className=' text-center text-white w-20 block rounded-lg p-2 bg-blue-600 active:blur-sm'>
                Да!
            </div>
        </div>
    )
}

export default Logout