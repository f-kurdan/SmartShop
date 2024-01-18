
import { HandlerContext, NameContext } from '@/contexts/Contexts'
import React, { useContext } from 'react'

const CancelButton = ({name}: {name: string}) => {
    const handleCancelClick = useContext(HandlerContext)

    return (
        <div onClick={() => handleCancelClick(name)} autoFocus className='absolute p-2 rounded-full bg-red-200 cursor-pointer top-5 w-10 h-10 right-4 border-2 border-black text-center'>
            X
        </div>
    )
}

export default CancelButton