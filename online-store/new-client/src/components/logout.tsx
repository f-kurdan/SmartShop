import React from 'react'

const Logout = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
        <div className='text-white text-center w-48 text-xs'>Вы точно хотите выйти?</div>
        <div className=' text-center font-black w-fit block rounded-lg p-2 bg-lime-500'>
            Выйти
        </div>
        </div>
    )
}

export default Logout