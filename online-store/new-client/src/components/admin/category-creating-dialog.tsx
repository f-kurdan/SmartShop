import { FormEvent, useRef } from 'react'
import CancelButton from './cancel-button'
import SaveButton from './save-button'
import { useCreateCategory } from '../../hooks/useCreateCategory'

const CategoryCreatingDialog = ({ state, title }: { state: boolean, title: string }) => {
  const mutation = useCreateCategory()
  const nameInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    if (imageInputRef.current?.files && nameInputRef.current) {
      formData.append('categoryImage', imageInputRef.current?.files[0]);
      formData.append('name', nameInputRef.current?.value);
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
        <form onSubmit={onSubmit} action="#" method="POST" encType="multipart/form-data">
          <label htmlFor="name">
            <input required ref={nameInputRef} type="text" id='name' placeholder='Введите название' className={`${!nameInputRef.current ? " outline outline-2 outline-red-500" : ''} bg-gray-100 rounded-lg h-14 w-11/12 p-4`} />
          </label>
          <label htmlFor="categoryIamge">
            <input aria-required type="file" ref={imageInputRef} name='categoryImage' id='categoryImage' />
          </label>
          <SaveButton />
        </form>
        <CancelButton name="category" />
      </div>
    </dialog>
  )
}

export default CategoryCreatingDialog