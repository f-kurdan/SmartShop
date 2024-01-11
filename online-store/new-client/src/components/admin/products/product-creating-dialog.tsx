import React, { FormEvent } from 'react'
import useCategories from '@/hooks/useCategories';
import useBrands from '@/hooks/useBrands';
import CancelButton from '../cancel-button'
import ProductSpecificationInputs from './product-specification-inputs';
import ProductImageInputs from './product-image-inputs';
import { brand, category, ProductFormInputs, ProductInfo } from '../../../types';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import ProductNameAndPriceInputs from './product-name-and-priceInputs';
import ProductCategoryAndBrandInputs from './product-category-and-brand-inputs';

const ProductCreatingDialog = ({ state, name, title }: { state: boolean, name: string, title: string }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ProductFormInputs>({
        defaultValues: {
            specs: [{
                specName: 'Цвет',
                specDescription: "Белый"
            }]
        }
    })

    const onSubmit: SubmitHandler<ProductFormInputs> = (data) => {
        const formData = new FormData();
    }

    return (
        <dialog open={state} className='fixed top-20 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg  w-1/2' >
            <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-7 flex-col items-start justify-start p-5`}>
                <div className='font-bold text-3xl text-center text-gray-600'>
                    {title}
                </div>
                <ProductCategoryAndBrandInputs
                    register={register}
                    errors={errors}
                />
                <ProductNameAndPriceInputs
                    register={register}
                    errors={errors} />
                <ProductImageInputs
                    register={register}
                    error={errors.images}
                />
                <ProductSpecificationInputs
                    register={register}
                    control={control} />
            </form>
            {/* <SaveButton /> */}
            <CancelButton name={name} />
        </dialog>
    )
}

export default ProductCreatingDialog