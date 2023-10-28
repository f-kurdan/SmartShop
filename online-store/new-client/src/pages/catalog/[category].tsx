import React, { ReactNode, useState } from 'react'

const Category = ({category}:{category: string}) => {
    const [filteredBrands, setFilteredBrands] = useState<string[]>([]);

    return (
        <div className='flex flex-row justify-around items-start mt-3'>
            <div className='flex flex-col w-2/3 min-h-fit mr-10'>
                { }
            </div>
        </div>
    )
}

export default Category