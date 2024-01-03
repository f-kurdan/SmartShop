import React from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useCreateCategory } from '../../hooks/useCreateCategory'
import SaveButton from './save-button'

type Inputs = {
    name: string
    image: FileList
}

const Form = ({name}:{name: string}) => {
    const mutation = getHook(name)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const formData = new FormData();
        if (data.name && data.image) {
            formData.append('name', data.name);
            formData.append('image', data.image[0]);
        }
        mutation.mutate(formData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" encType="multipart/form-data"
            className='flex flex-col gap-3 justify-center items-'>
            <label>
                <input
                    type="text"
                    placeholder='Введите название'
                    className={`bg-gray-100 rounded-lg h-14 w-full p-4`}
                    {...register("name", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: 'Название должно содержать минимум 3 символа'
                        }
                    })} />
                {errors.name && <p className='text-red-500'>This field is required</p>}
            </label>
            <label>
                <input
                    type="file"
                    className='bg-'
                    {...register("image", { required: true })} />
                {errors.image && <p className='text-red-500'>Добавьте обложку</p>}
            </label>
            <SaveButton />
        </form>
    )
}

function getHook(name: string)   {
    switch (name) {
        default: return useCreateCategory();
    }
}

export default Form