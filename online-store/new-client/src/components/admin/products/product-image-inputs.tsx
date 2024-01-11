import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { ProductFormInputs } from '../../../types'

const ProductImageAdding = ({register, error}:{register: UseFormRegister<ProductFormInputs>, error?: FieldError}) => {
  const [images, setImages] = useState<string[]>([])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setImages(files.map(f => f.name));    
    }
  }

  return (
    <div className='grid grid-cols-2 gap-2 w-11/12 justify-start items-start'>
      <label onChange={onInputChange}  className={`${error? 'outline outline-red-500' : ''} inline border-2 border-solid rounded-md p-3`}>
        Добавить изображения
        <input 
        hidden type="file" 
        multiple 
        {...register("name", {
          required: true
        })} />
      </label>
      {images?.length ? (<div className='flex flex-col gap-1 justify-start items-start'>
        {images?.map(i =>
          <span key={i} className='text-lime-500 text-center'>{i}</span>
        )}
      </div>) : null
      }
    </div>
  )
}

export default ProductImageAdding