import React from 'react'
import CancelButton from './cancel-button'

const Dialog = ({ state, title }: { state: boolean, title: string }) => {
    console.log(state)
    return (
        <dialog open={state} className='fixed top-1/4 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg h-1/2 w-1/2' >
            <div className={`flex gap-10 flex-col items-center justify-start  p-5`}>
                <div className='font-bold text-3xl text-center text-gray-600'>
                    {title}
                </div>
                <div>
                    <input type="text" placeholder='Введите название' className='bg-gray-100 rounded-2xl w-4/5 h-10 p-5' />
                </div>
                <CancelButton />
            </div>
        </dialog>
    )
}

export default Dialog