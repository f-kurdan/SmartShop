import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ProductFormInputs } from '../../../types'

const ProductNameAndPriceInputs = ({ errors, register }: {
  register: UseFormRegister<ProductFormInputs>,
  errors: FieldErrors<ProductFormInputs>
}) => {
  return (
    <div className='grid grid-cols-2 gap-2 w-11/12 '>
      <label>
        <input
          type="text"
          placeholder='Название'
          className={`bg-gray-100 rounded-lg w-full h-14 p-4 ${errors.name ? 'outline outline-red-500' : ''}`}
          {...register("name", {
            required: "Введите название",
            minLength: {
              value: 3,
              message: "Название должно содержать минимум 3 символа"
            }
          })} />
      </label>
      <label>
        <input
          type="number"
          placeholder='Стоимость'
          className={`bg-gray-100 w-full rounded-lg h-14 p-4 ${errors.price ? 'outline outline-red-500' : ''}`}
          {...register("price", {
            required: "Укажите цену",
            valueAsNumber: true,
          })} />
      </label>
    </div>
  )
}

export default ProductNameAndPriceInputs