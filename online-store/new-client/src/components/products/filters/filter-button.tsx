import React, { useState } from 'react'

const FilterButton = (
    { setNewCount, onClick }: {
        setNewCount: (increment: (toIncrement: boolean) => void) => void,
        onClick: () => void
    }) => {
    const [count, setCount] = useState<number>(0)

    const buttonIncrement = (toIncrement: boolean) => {
        setCount(current => toIncrement ? current + 1 : current - 1)
    }

    setNewCount(buttonIncrement)


    return (
        <div className='sticky text-center bottom-2 rounded-md bg-black text-white p-2 hover:cursor-pointer hover:shadow-lg hover:shadow-violet-400/50' onClick={onClick}>Применить ( {count} )</div>
    )
}

export default FilterButton