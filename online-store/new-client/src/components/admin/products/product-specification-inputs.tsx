import React from 'react'
import { Control, useFieldArray, UseFormRegister } from 'react-hook-form'
import { ProductFormInputs, ProductInfo } from '../../../types'
import ProductSpecificationRow from './product-specification-row'

const ProductSpecificationAdding = ({ register, control }: {
    register: UseFormRegister<ProductFormInputs>,
    control: Control<ProductFormInputs, any>
}) => {
    const {
        fields,
        append,
        remove } = useFieldArray({
            control,
            name: "specs",
        })

    const handleAddRow = () => {
        append({ specName: '', specDescription: '' });
    }

    return (
        <div className='flex flex-col gap-3 w-11/12 justify-center items-start'>
            <div onClick={handleAddRow} className='p-3 rounded-lg bg-blue-200 cursor-pointer border-2 border-black text-center'>
                Добавить характеристику
            </div>
            {fields.map((field, index) =>
            (<ProductSpecificationRow 
                index={index}
                register={register}
                field={field}
                remove={remove} />)
            )}
        </div>
    )
}

export default ProductSpecificationAdding