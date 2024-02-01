import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useUpdateCategory from '../../../../hooks/categories/useUpdateCategory'
import SaveButton from '../../dialogs/save-button'

type Inputs = {
  name: string
  image?: FileList
}

const CategoryUpdateForm = ({ defaultName }: { defaultName: string }) => {
  const mutation = useUpdateCategory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('zashel syuda')
    const formData = new FormData();
    if (data.image) {
      formData.append('categoryImage', data.image[0]);
    }
    if (data.name) {
      formData.append('name', data.name);
    }
    mutation.mutate(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-gray-400 p-3 h-[100px] rounded-md'>
      <div className='flex flex-row justify-start items-center gap-5'>
        <label >
          <input
            type="text"
            defaultValue={defaultName}
            placeholder='Новое название'
            className='bg-white rounded-lg p-4 text-gray-500'
            {...register("name", {
              required: false,
              minLength: {
                value: 3,
                message: "Название должно содержать минимум 3 символа"
              }
            })} />
        </label>
        <label className='border rounded-lg p-4 bg-white '>
          Новое изображение
          <input
            hidden
            type="file"
            {...register("image", { required: false })} />
        </label>
        <div>
          <SaveButton />
        </div>
      </div>
      {errors.name && <p className='text-red-500 text-center'>{errors.name.message}</p>}
    </form>
  )
}

export default CategoryUpdateForm