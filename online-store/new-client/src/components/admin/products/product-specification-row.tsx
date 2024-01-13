import React, { memo } from 'react'
import { FieldArrayWithId, UseFormRegister } from 'react-hook-form'
import { ProductFormInputs } from '../../../types'

const ProductSpecificationRow =  memo(({index, register, field, remove}:{
    index:number, 
    register: UseFormRegister<ProductFormInputs>,
    field: FieldArrayWithId<ProductFormInputs, "specs", "id">,
    remove: (index?: number | number[] | undefined) => void}) => {
    return (
        <div key={field.id} className='grid grid-cols-3 justify-items-stretch gap-2'>
                <input
                    type="text"
                    placeholder='Название'
                    className="border-2 border-black rounded-lg p-2 font-italic"
                    {...register(`specs.${index}.specName` as const)}
                />
                <input
                    type="text"
                    placeholder='Описание'
                    className="border-2 border-black rounded-lg p-2 font-italic"    
                    {...register(`specs.${index}.specDescription` as const)}
                />
                <div onClick={() => remove(index)} className='p-3 rounded-lg bg-red-200 cursor-pointer border-2 border-black text-center'>
                    Удалить
                </div>
            </div>
    )
})

export default ProductSpecificationRow