import { FormEvent, useRef } from 'react'
import { useForm } from 'react-hook-form'
import CancelButton from './cancel-button'
import SaveButton from './save-button'
import { useCreateCategory } from '../../hooks/useCreateCategory'
import { SubmitHandler } from 'react-hook-form/dist/types'

type Inputs = {
  name: string
  categoryImage: FileList
}

const CategoryCreatingDialog = ({ state, title }: { state: boolean, title: string }) => {
  const mutation = useCreateCategory()
  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    if (data.name && data.categoryImage) {
      formData.append('name', data.name);
      formData.append('categoryImage', data.categoryImage[0]);
    }
    mutation.mutate(formData)
  }

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget)
  //   const formDataObject = Object.fromEntries(formData)
  //   mutation.mutate(formDataObject)
  // }

  console.log(mutation)

  return (
    <dialog open={state} className='fixed top-1/4 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg min-h-[350px] w-1/2' >
      <div className={`flex gap-16 flex-col items-center justify-start p-5`}>
        <div className='font-bold text-3xl text-center text-gray-600'>
          {title}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" encType="multipart/form-data"
          className='flex flex-col gap-3 justify-center items-'>
          <label>
            <input
              type="text"
              placeholder='Введите название'
              className={`bg-gray-100 rounded-lg h-14 w-full p-4`}
              {...register("name", {
                required: "Введите название категории",
                minLength: {
                  value: 3,
                  message: 'Название должно содержать минимум 3 символа'
                }
              })} />
            {/* {errors.name && <p className='text-red-500'>This field is required</p>} */}
          </label>
          <label>
            <input
              type="file"
              className='bg-'
              {...register("categoryImage", { required: "Добавьте обложку для категории" })} />
            {errors.categoryImage && <p className='text-red-500'>Добавьте обложку для категории</p>}
          </label>
          <SaveButton />
        </form>
        <CancelButton name="category" />
      </div>
    </dialog>
  )
}

export default CategoryCreatingDialog