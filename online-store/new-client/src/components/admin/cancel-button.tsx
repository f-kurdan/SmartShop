import { HandlerContext } from '@/contexts/HandlerContexts'
import { NameContext } from '@/contexts/NameContext'
import React, { useContext } from 'react'

const CancelButton = () => {
    const handleCancelClick = useContext(HandlerContext)
    const name = useContext(NameContext)

    return (
        <div onClick={() => handleCancelClick(name)} autoFocus className='absolute p-2 rounded-lg bg-red-200 cursor-pointer bottom-5 right-5 border-2 border-black'>
            Закрыть
        </div>
    )
}

export default CancelButton