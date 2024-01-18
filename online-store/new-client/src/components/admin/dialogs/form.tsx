import React, { memo, useState, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useCreateCategory } from '../../../hooks/categories/useCreateCategory'
import SaveButton from './save-button'
import { useCreateBrand } from '../../../hooks/brands/useCreateBrand'
import { FetchError } from '../../../types'

type Inputs = {
    name: string
    image?: FileList
}

const Form = memo(({ name }: { name: string }) => {
    const [image, setImage] = useState('');
    const mutation = getHook(name)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const formData = new FormData();
        if (data.image) {
            formData.append('categoryImage', data.image[0]);
        }
        if (data.name) {
            formData.append('name', data.name);
        }
        mutation.mutate(formData)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]?.name)
        }
    }

    const err = mutation.error as FetchError;
    const errorCode = err?.res?.status;

    return (
        <>
            {mutation.isSuccess ? <h1 className='absolute top-16 text-2xl text-lime-500 text-center'>Успех!</h1> : null}
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" encType="multipart/form-data"
                className='flex flex-col gap-3 justify-center items-stretch w-4/5'>
                <label>
                    <input
                        type="text"
                        placeholder='Введите название'
                        className={`bg-gray-100 rounded-lg h-14 w-full p-4`}
                        {...register("name", {
                            required: "Введите название",
                            minLength: {
                                value: 3,
                                message: "Название должно содержать минимум 3 символа"
                            }
                        })} />
                    {errors.name && <p className='text-red-500 text-center'>{errors.name.message}</p>}
                </label>
                {
                    name === 'category' ?
                        (<>
                            <label onChange={onChange} className={`border-2 border-solid rounded-lg p-2 cursor-pointer inline-block text-center ${image ? 'outline outline-lime-400' : errors.image ? 'outline outline-red-500' : ''}`}>
                                <span>Добавить обложку</span>
                                <input
                                    type="file"
                                    className='hidden'
                                    {...register("image", { required: true })} />
                            </label>
                        </>) : null
                }
                {errorCode === 409 ? <p className='text-red-500 text-center'>
                    Такое название уже существует!
                </p> : null}
                <SaveButton />
            </form>
        </>
    )
})

function getHook(name: string) {
    switch (name) {
        case 'category': return useCreateCategory();
        default: return useCreateBrand()
    }
}

export default Form