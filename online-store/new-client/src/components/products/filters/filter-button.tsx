import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
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
        <div className={`flex flex-row justify-center gap-2 items-center transition-all duration-300 sticky text-center rounded-md bg-black text-white p-2 active:outline active:outline-4 active:outline-purple-300 hover:cursor-pointer hover:outline hover:outline-4 hover:outline-cyan-200 bottom-3`} onClick={onClick}>
                <AdjustmentsHorizontalIcon width={21} height={20} />
            {count?'Применить': 'Показать все товары'} </div>
    ) 
}

export default FilterButton