import React from 'react'

const FilterContainer = ({children}:{children: JSX.Element}) => {
    return (
        <div className='flex flex-col bg-white w-1/4 ml-10 rounded-xl shadow-lg shadow-black/30 px-10 py-7'>
            {children}
        </div>
    )
}

export default FilterContainer