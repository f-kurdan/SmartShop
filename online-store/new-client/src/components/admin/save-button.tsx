import { HandlerContext } from '@/contexts/HandlerContexts'
import { NameContext } from '@/contexts/NameContext'
import React, { useContext } from 'react'

const SaveButton = () => {
    const handleCancelClick = useContext(HandlerContext)
    const name = useContext(NameContext)

    return (
        <div onClick={() => handleCancelClick(name)} autoFocus className='p-3 rounded-lg bg-lime-200 cursor-pointer border-2 border-black text-center'>
            Сохранить
        </div>
    )
}

export default SaveButton