import React from 'react'
import { UseMutationResult } from 'react-query'

const SaveButton = ({mutation}:{mutation: UseMutationResult<void, unknown, FormData | undefined, unknown>}) => {

    // function handleCLick(e: React.FormEvent<HTMLButtonElement>) {
    //     e.preventDefault()
    //     console.log(e)
    //     // onSubmit(e);
    // }

    console.log("inside button: " + mutation?.status)
    const color = mutation?.isError? 'bg-red-200' : 'bg-lime-200';

    return (
        <button type='submit' autoFocus className={`${color} p-3 rounded-lg cursor-pointer border-2 border-black text-center min-w-1/3 self-end`}>
            {mutation?.isSuccess ? 'Успех!' : 'Сохранить'}
        </button>
    )
}

export default SaveButton