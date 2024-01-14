import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { ProductFormInputs } from '../../../types'

const ProductImageAdding = ({ register, error }: {
  register: UseFormRegister<ProductFormInputs>,
  error?: FieldError
}) => {
  const [images, setImages] = useState<string[]>([])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setImages(files.map(f => f.name));
    }
  }

  return (
    <div className='grid grid-cols-2 gap-2 w-11/12 justify-start items-start'>
      <label onChange={onInputChange} className={`${error ? 'outline outline-red-500' : ''} flex flex-row items-center border-2 border-solid rounded-lg p-4 h-14`}>
        <span>Добавить изображения</span>
        <input
          hidden type="file"
          multiple
          {...register("name", {
            required: true
          })} />
      </label>
      <label>
        <input
          type="number"
          placeholder='Количество'
          className={`bg-gray-100 w-full rounded-lg h-14 p-4`} />
      </label>
      {images?.length ? (<div className='flex flex-col gap-1 justify-start items-start'>
        {images?.map(i =>
          <span key={i} className='text-blue-500 text-center'>{i}</span>
        )}
      </div>) : null
      }
    </div>
  )
}

export default ProductImageAdding