import React, { FormEvent } from 'react'
import useCategories from '@/hooks/useCategories';
import useBrands from '@/hooks/useBrands';
import CancelButton from '../cancel-button'
import ProductSpecificationAdding from './product-specification-adding';
import ProductImageAdding from './product-image-adding';
import { brand, category, ProductFormInputs, ProductInfo } from '../../../types';
import { SubmitHandler, useForm } from 'react-hook-form';

const ProductCreatingDialog = ({ state, name, title }: { state: boolean, name: string, title: string }) => {
    const { data: categories } = useCategories();
    const { data: brands } = useBrands();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormInputs>()

    const onSubmit: SubmitHandler<ProductFormInputs> = (data) => {
        const formData = new FormData();
    }

    return (
        <dialog open={state} className='fixed top-20 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg  w-1/2' >
            <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-7 flex-col items-start justify-start p-5`}>
                <div className='font-bold text-3xl text-center text-gray-600'>
                    {title}
                </div>
                <div className='grid grid-cols-2 gap-2 w-11/12 '>
                    <select defaultValue={"1"} className={`${errors.category ? 'outline outline-red-500' : ''} bg-gray-100 rounded-lg h-14 p-3`}
                    {...register("category", {
                        required: true,
                    })}>
                        <option value='1' disabled hidden>Выберите категорию</option>
                        {categories?.map(category =>
                            <option key={category.id} value={category.id} className='my-5'>{category.name}</option>)}
                    </select>
                    <select defaultValue={"1"} className={`${errors.brand ? 'outline outline-red-500' : ''} bg-gray-100 rounded-lg h-14 p-3`} 
                    {...register("brand", {
                        required: true,
                    })}>
                        <option value='1' disabled hidden>Выберите бренд</option>
                        {brands?.map(brand =>
                            <option key={brand.id} value={brand.id} >{brand.name}</option>)}
                    </select>
                </div>
                <div className='grid grid-cols-2 gap-2 w-11/12 '>
                    <input 
                    type="text" 
                    placeholder='Введите название' 
                    className={`bg-gray-100 rounded-lg h-14 p-4 ${errors.name ? 'outline outline-red-500' : ''}`}
                    {...register("name", {
                        required: "Введите название",
                        minLength: {
                            value: 3,
                            message: "Название должно содержать минимум 3 символа"
                        }
                    })}/>
                    <input 
                    type="number"
                     placeholder='Введите стоимость' 
                     className={`bg-gray-100 rounded-lg h-14 p-4 ${errors.price ? 'outline outline-red-500' : ''}`} 
                     {...register("price", {
                        required: "Укажите цену"
                    })}/>
                </div>
                <ProductImageAdding 
                register={register}
                error={errors.images}
                />
                <ProductSpecificationAdding />
            </form>
            {/* <SaveButton /> */}
            <CancelButton name={name} />
        </dialog>
    )
}

export default ProductCreatingDialog