import React, { memo } from 'react'
import { FieldArrayWithId, FieldErrors, UseFormRegister } from 'react-hook-form'
import { ProductFormInputs } from '../../../../types'

const ProductSpecificationRow =  memo(({index, register, field, remove, errors}:{
    index:number, 
    register: UseFormRegister<ProductFormInputs>,
    field: FieldArrayWithId<ProductFormInputs, "specs", "id">,
    remove: (index?: number | number[] | undefined) => void,
    errors: FieldErrors<ProductFormInputs>}) => (
        <div key={field.id} className='grid grid-cols-3 justify-items-stretch gap-2'>
                <input
                    type="text"
                    placeholder='Название'
                    className={`${errors.specs ? 'outline outline-red-500' : ''}  border-2 border-black rounded-lg p-2 font-italic`}
                    {...register(`specs.${index}.name` as 'specs.0.name', { required: true})}
                />
                <input
                    type="text"
                    placeholder='Описание'
                    className={`${errors.specs ? 'outline outline-red-500' : ''} border-2 border-black rounded-lg p-2 font-italic`}    
                    {...register(`specs.${index}.description` as 'specs.0.description', { required: true})}
                />
                <div onClick={() => remove(index)} className='p-3 rounded-lg bg-red-200 cursor-pointer border-2 border-black text-center'>
                    Удалить
                </div>
            </div>
    )
)

export default ProductSpecificationRow