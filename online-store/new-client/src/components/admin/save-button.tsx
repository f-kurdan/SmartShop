import React from 'react'

const SaveButton = ({ onSubmit }: { onSubmit: (event: React.FormEvent<HTMLButtonElement>) => void }) => {

    function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(e)
        onSubmit(e);
    }

    return (
        <button onClick={handleSubmit} autoFocus className='p-3 rounded-lg bg-lime-200 cursor-pointer border-2 border-black text-center'>
            Сохранить
        </button>
    )
}

export default SaveButton