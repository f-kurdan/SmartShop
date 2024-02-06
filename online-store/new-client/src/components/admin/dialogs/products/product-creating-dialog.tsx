import { SubmitHandler, useForm } from 'react-hook-form';
import { FetchError, ProductFormInputs, product } from '../../../../types';
/*Product components*/
import ProductSpecificationInputs from './product-specification-inputs';
import ProductQuantityAndImageAdding from './product-quantity-and-image-inputs';
import ProductNameAndPriceInputs from './product-name-and-price-inputs';
import ProductCategoryAndBrandInputs from './product-category-and-brand-inputs';
import useCreateProduct from '../../../../hooks/products/useCreateProducts';
/*Buttons */
import CancelButton from '../cancel-button';
import SaveButton from '../save-button';
import { memo } from 'react';

const ProductCreatingDialog = memo(({ state, name, title }: {
    state: boolean, 
    name: string, 
    title: string}) => {
    const mutation = useCreateProduct();

    const {
        register,
        handleSubmit,
        resetField,
        setValue,
        control,
        formState: { errors },
    } = useForm<ProductFormInputs>({
        defaultValues: {            
            specs: [{
                name: '',
                description: ''
            }]
        }
    })

    const onSubmit: SubmitHandler<ProductFormInputs> = (data) => {
        const formData = new FormData();
        if (data.categorySlug)
            formData.append('categorySlug', data.categorySlug);
        if (data.brandSlug)
            formData.append('brandSlug', data.brandSlug);
        if (data.name)
            formData.append('name', data.name);
        if (data.price)
            formData.append('price', data.price.toString());
        if (data.images) {
            Array.from(data.images).forEach(image => {
                formData.append('images[]', image);
            })                
        }
        if (data.quantity)
            formData.append('quantity', data.quantity.toString());
        if (data.specs) {
            data.specs.forEach(spec => formData.append('productInfo[]', JSON.stringify({ name: spec.name, description: spec.description})))
        }

        mutation.mutate(formData)
    }

    const err = mutation.error as FetchError;
    const errorCode = err?.res?.status;

    return (
        <dialog open={state} className='fixed top-20 transition-all duration-100 z-[1000] bg-white rounded-lg shadow-lg  w-1/2 h-[80vh] overflow-y-scroll' >
            {mutation.isSuccess ? <h1 className='absolute top-16 text-2xl text-lime-500 text-center'>Успех!</h1> : null}
            <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-5 flex-col items-start justify-start p-5 `} encType="multipart/form-data">
                <div className='font-bold text-3xl text-center text-gray-600'>
                    {title}
                </div>
                <ProductCategoryAndBrandInputs
                    register={register}
                    errors={errors}
                />
                <ProductNameAndPriceInputs
                    register={register}
                    errors={errors}
                />
                <ProductQuantityAndImageAdding
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    resetField={resetField}
                />
                <ProductSpecificationInputs
                    register={register}
                    control={control}
                    errors={errors} />
                <div>
                    <SaveButton />
                </div>
                {errorCode === 409 ? <p className='text-red-500 text-center'>
                    Такое название уже существует!
                </p> : null}
            </form>
            <CancelButton name={name} />
        </dialog>
    )
})

export default ProductCreatingDialog