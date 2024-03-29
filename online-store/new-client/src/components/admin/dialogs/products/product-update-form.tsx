import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductFormInputs, product } from '../../../../types';
import { useQuery } from 'react-query';
import ProductCategoryAndBrandInputs from './product-category-and-brand-inputs';
import ProductNameAndPriceInputs from './product-name-and-price-inputs';
import ProductQuantityAndImageAdding from './product-quantity-and-image-inputs';
import ProductSpecificationInputs from './product-specification-inputs';
import SaveButton from '../save-button';
import useUpdateProduct from '../../../../hooks/products/useUpdateProduct';
import DIalogCancelButton from './dialog-cancel-button';

const fetchImages = async (slug?: string) => {
  if (!slug) return new FileList();
  const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products/images/${slug}`);
  const data = await res.json();

  return data._queue;
}

const ProductUpdateForm = ({ dialogRef, toOpen, defaultProduct }: {
  dialogRef: React.RefObject<HTMLDialogElement>,
  toOpen: boolean,
  defaultProduct?: product
}) => {
  const mutation = useUpdateProduct();

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    formState: { errors },
  } = useForm<ProductFormInputs>({
    defaultValues: {
      categorySlug: defaultProduct?.category.slug ?? '',
      brandSlug: defaultProduct?.brand.slug ?? '',
      name: defaultProduct?.name ?? '',
      price: defaultProduct?.price ?? 0,
      quantity: defaultProduct?.quantity ?? 0,
      specs: defaultProduct?.productInfo ?? [{
        name: '',
        description: ''
      }]
    }
  })

  const onSubmit: SubmitHandler<ProductFormInputs> = (data) => {
    const formData = new FormData();
    if (data.id)
      formData.append('id', data.id.toString());
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
      data.specs.forEach(spec => formData.append('productInfo[]', JSON.stringify({ id: spec.id, name: spec.name, description: spec.description })))
    }

    console.log('zapros')

    mutation.mutate(formData)
  }

  return (
    <dialog open={toOpen} ref={dialogRef} id='product-creation-dialog' className='fixed top-20 transition-all duration-100 z-[1000] bg-white rounded-lg shadow-lg  w-1/2 h-[80vh] overflow-y-scroll' >
      <form onSubmit={handleSubmit(onSubmit)} className={`flex relative gap-5 flex-col items-start justify-start p-5 `} encType="multipart/form-data">
        <h1 className='font-bold inline-block text-3xl text-center text-gray-600'>
          Изменить товар
        </h1>
        {mutation.isSuccess ? <h1 className='absolute top-[20px] right-[200px] text-3xl text-lime-500 text-center'>Успех!</h1> : null}
        <input type="hidden" value={defaultProduct?.id} {...register('id')} />
        <ProductCategoryAndBrandInputs
          register={register}
          errors={errors}
          defaultProduct={defaultProduct}
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
      </form>
      <DIalogCancelButton />
    </dialog>
  )
}

export default ProductUpdateForm