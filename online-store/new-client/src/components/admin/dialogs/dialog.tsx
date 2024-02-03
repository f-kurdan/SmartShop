import { use, useEffect, useRef, useState } from 'react'
import CancelButton from './cancel-button'
import Form from './form'

const Dialog = ({ dialogRef, name, toShow, title }: { dialogRef: React.RefObject<HTMLDialogElement>, name: string, toShow: boolean, title: string }) => {

  return (
    <dialog open={toShow} ref={dialogRef} id='creation-dialog' className='fixed top-1/4 transition-all duration-100 z-50 bg-white rounded-lg min-h-[350px] w-1/2 shadow-2xl' >
      <div className={`flex gap-16 flex-col items-center justify-start p-5`}>
        <div className='font-bold text-3xl text-center text-gray-600'>
          {title}
        </div>
        <Form name={name} />
        <CancelButton name={name} />
      </div>
    </dialog>
  )
}

export default Dialog