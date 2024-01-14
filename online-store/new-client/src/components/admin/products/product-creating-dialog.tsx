import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductFormInputs } from '../../../types';
/*Product components*/
import ProductSpecificationInputs from './product-specification-inputs';
import ProductQuantityAndImageAdding from './product-quantity-and-image-inputs';
import ProductNameAndPriceInputs from './product-name-and-price-inputs';
import ProductCategoryAndBrandInputs from './product-category-and-brand-inputs';
import useCreateProduct from '../../../hooks/products/useCreateProducts';
/*Buttons */
import CancelButton from '../cancel-button';
import SaveButton from '../save-button';

const ProductCreatingDialog = ({ state, name, title }: { state: boolean, name: string, title: string }) => {
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
                specName: '',
                specDescription: ''
            }]
        }
    })

    const onSubmit: SubmitHandler<ProductFormInputs> = (data) => {
        const formData = new FormData();
        if (data.category)
            formData.append('categorySlug', data.category.slug);
        if (data.brand)
            formData.append('brandSlug', data.brand.slug);
        if (data.name)
            formData.append('name', data.name);
        if (data.price)
            formData.append('price', data.price.toString());
        if (data.images) {
            Array.from(data.images).forEach(image =>
                formData.append('images[]', image));
        }
        if (data.specs) {
            Array.from(data.specs).forEach(spec => {
                formData.append('productInfo[]', JSON.stringify({ 'name': spec.specName, 'description': spec.specDescription }));
            });
        }
        
        mutation.mutate(formData)
    }

    return (
        <dialog open={state} className='fixed top-20 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg  w-1/2' >
            <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-5 flex-col items-start justify-start p-5`}>
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
                    error={errors.images}
                    setValue={setValue}
                    resetField={resetField}
                />
                <ProductSpecificationInputs
                    register={register}
                    control={control} />
                <div>
                    <SaveButton />
                </div>
            </form>
            <CancelButton name={name} />
        </dialog>
    )
}

export default ProductCreatingDialog