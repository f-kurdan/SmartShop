import React, { useContext } from 'react'
import { CancelButtonHandlerContext} from '../../../../contexts/Contexts'

const DIalogCancelButton = () => {
    const handleCancelClick = useContext(CancelButtonHandlerContext)

    return (
        <div onClick={handleCancelClick} autoFocus className='absolute p-2 rounded-full bg-red-200 cursor-pointer top-5 w-10 h-10 right-4 border-2 border-black text-center'>
            X
        </div>
    )
}

export default DIalogCancelButton