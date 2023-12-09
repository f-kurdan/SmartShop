import React from 'react'
import ProductSpecificationRow from './product-specification-row'

const ProductSpecificationAdding = () => {
    return (
        <div className='flex flex-col gap-3 w-11/12 justify-center items-start'>
            <div className='p-3 rounded-lg bg-blue-200 cursor-pointer border-2 border-black text-center'>
                Добавить характеристику
            </div>
            <ProductSpecificationRow />
        </div>
    )
}

export default ProductSpecificationAdding