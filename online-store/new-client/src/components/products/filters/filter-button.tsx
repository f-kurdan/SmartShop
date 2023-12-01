import React, { useState } from 'react'

const FilterButton = (
    { setNewCount, onClick, selectedOptionsCount }: {
        setNewCount: (increment: (toIncrement: boolean) => void) => void,
        onClick: () => void,
        selectedOptionsCount: number
    }) => {
    const [count, setCount] = useState<number>(selectedOptionsCount ?? 0)

    const buttonIncrement = (toIncrement: boolean) => {
        setCount(current => toIncrement ? current + 1 : current - 1)
    }

    setNewCount(buttonIncrement)


    return (
        <div className={`transition-all duration-300 sticky text-center rounded-md bg-black text-white p-2 hover:cursor-pointer hover:shadow-lg hover:shadow-violet-400/50 ${count? 'bottom-3 opacity-100' : ' -bottom-full opacity-0 invisible'}`} onClick={onClick}>Применить </div>
    ) 
}

export default FilterButton