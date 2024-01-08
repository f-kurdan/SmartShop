import React from 'react'
import { UseMutationResult } from 'react-query'

const SaveButton = ({isSuccess}:{isSuccess: boolean}) => {
    return (
        <button type='submit' autoFocus className={`bg-lime-200 p-3 rounded-lg cursor-pointer border-2 border-black text-center min-w-1/3 self-end`}>
            {isSuccess ? 'Успех!' : 'Сохранить'}
        </button>
    )
}

export default SaveButton