import { HandlerContext, NameContext } from '@/contexts/Contexts'
import React, { useContext } from 'react'
import { useMutation } from 'react-query'

const SaveButton = ({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLButtonElement>) => void }) => {
    const handleCancelClick = useContext(HandlerContext)
    const name = useContext(NameContext)

    function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(e)
        onSubmit(e);
        // handleCancelClick(name)
    }

    return (
        <button onClick={handleSubmit} autoFocus className='p-3 rounded-lg bg-lime-200 cursor-pointer border-2 border-black text-center'>
            Сохранить
        </button>
    )
}

export default SaveButton