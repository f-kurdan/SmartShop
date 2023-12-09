import React from 'react'
import CancelButton from './cancel-button'
import SaveButton from './save-button'

const Dialog = ({ state, title }: { state: boolean, title: string }) => {

  return (
    <dialog open={state} className='fixed top-1/4 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg min-h-[350px] w-1/2' >
            <div className={`flex gap-16 flex-col items-center justify-start p-5`}>
                <div className='font-bold text-3xl text-center text-gray-600'>
                    {title}
                </div>
                <input type="text" placeholder='Введите название' className='bg-gray-100 rounded-lg h-14 w-11/12 p-4' />
                <CancelButton />
                <SaveButton />
            </div>
        </dialog>
  )
}

export default Dialog