import { ChangeEvent, useState } from 'react'
import { FieldErrors, UseFormRegister, UseFormResetField, UseFormSetValue } from 'react-hook-form'
import { ProductFormInputs } from '../../../types'
import { } from '@mui/icons-material'
import { XCircleIcon } from '@heroicons/react/24/solid'


const ProductQuantityAndImageAdding = ({ register, errors, setValue, resetField }: {
  register: UseFormRegister<ProductFormInputs>,
  errors: FieldErrors<ProductFormInputs>,
  setValue: UseFormSetValue<ProductFormInputs>,
  resetField: UseFormResetField<ProductFormInputs>
}) => {
  const [images, setImages] = useState<File[]>([])

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setImages(files);
    }
  }

  const onRemove = (file: File) => {
    const dt = new DataTransfer()
    images.filter(image => image !== file).forEach(image =>
      dt.items.add(image)
    );

    setValue("images", dt.files);
    setImages(images.filter(image => image !== file))
  }

  const onReset = () => {
    resetField('images')
    setImages([])
  }

  return (
    <div className='grid grid-cols-2 gap-2 w-11/12 justify-start items-start'>
      <label>
        <input
          type="number"
          placeholder='Количество'
          className={`bg-gray-100 w-full rounded-lg h-14 p-4 ${errors.quantity ? 'outline outline-red-500' : ''}`}
          {...register("quantity", {
            required: true
          })} />
      </label>
      <label onChange={onInputChange} className={`${errors.images ? 'outline outline-red-500' : ''} flex flex-row items-center border-2 border-solid rounded-lg p-4 h-14`}>
        <span>Добавить изображения</span>
        <input
          hidden type="file"
          multiple
          {...register("images", {
            required: true
          })} />
      </label>
      <div></div>
      {images?.length ? (<div className='flex flex-col gap-1 justify-start items-start'>
        {images?.map(i =>
          <p className='flex flex-row gap-3 justify-center items-center'>
            <span key={i.name} className='text-blue-500 text-center p-2 border border-gray-300 rounded-lg'>
              {i.name}</span>
            <XCircleIcon onClick={() => onRemove(i)} width={30} height={30} className='inline-block cursor-pointer' />
          </p>
        )}
        <span
          className='bg-red-400 rounded-lg text-white text-center p-2'
          onClick={(e) => onReset()}
        >Очистить список</span>
      </div>) : null
      }
    </div>
  )
}

export default ProductQuantityAndImageAdding