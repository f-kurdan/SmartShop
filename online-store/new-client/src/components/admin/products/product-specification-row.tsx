import React, { memo } from 'react'

const ProductSpecificationRow =  memo(({id, handleDeleteRow}:{id:number, handleDeleteRow: (id: number) => void}) => {
    return (
        <div className='grid grid-cols-3 justify-items-stretch gap-2'>
            <input type="text" placeholder='Название' className="border-2 border-black rounded-lg p-2 text-center" />
            <input type="text" placeholder='Описание' className="border-2 border-black rounded-lg p-2 text-center" />
            <div onClick={() => handleDeleteRow(id)} className='p-3 rounded-lg bg-red-200 cursor-pointer border-2 border-black text-center'>
                Удалить
            </div>
        </div>
    )
})

export default ProductSpecificationRow