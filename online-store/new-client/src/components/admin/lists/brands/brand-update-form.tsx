import React from 'react'
import useUpdateBrand from '../../../../hooks/brands/useUpdateBrand'
import { SubmitHandler, useForm } from 'react-hook-form'
import SaveButton from '../../dialogs/save-button'

const BrandUpdateForm = ({ id, defaultName }: { id: number, defaultName: string }) => {
    const mutation = useUpdateBrand()

    type Input = { 
        id: number,
        name: string 
    };
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Input>()
  
    const onSubmit: SubmitHandler<Input> = (data) => {
      const formData = new FormData();
      if (data.id) {
        formData.append('id', data.id.toString());
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
            <input type="hidden" value={id} {...register("id")} />
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
          <div>
            <SaveButton />
          </div>
        </div>
        {errors.name && <p className='text-red-500 text-center'>{errors.name.message}</p>}
      </form>
    )
}

export default BrandUpdateForm