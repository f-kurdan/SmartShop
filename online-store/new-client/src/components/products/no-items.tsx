import React from 'react'

const NoItems = ({query}:{query?:string}) => { 
    return (
        <div className=' w-2/3 mr-10'>
            <div className=' bg-white rounded-xl shadow-lg shadow-black/30 px-10 py-7 '>
            По запросу <span className='text-lg font-bold'>{query ?? ''}</span> нет товаров!
            </div>
        </div>
    )
}

export default NoItems