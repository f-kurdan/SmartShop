import React from 'react'
import CancelButton from './cancel-button'

const Dialog = ({ state, title }: { state: boolean, title: string }) => {

    return (
        <dialog open={state} className={`fixed top-1/4 transition-all duration-100 h-1/2 z-10 bg-white flex-col  items-start p-5 rounded-lg shadow-lg w-1/2`}>
            <div className='font-bold text-3xl text-center text-gray-600'>
                {title}
            </div>
            <div>
                <input type="text" placeholder='Введтите название' className='bg-gray-100 rounded-2xl w-4/5 h-10 p-5' />
            </div>
            <CancelButton />
        </dialog>
    )
}

export default Dialog