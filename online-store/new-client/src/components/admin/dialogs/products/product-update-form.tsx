import React, { memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FetchError, ProductFormInputs, product } from '../../../../types';
import { useQuery } from 'react-query';
import ProductCategoryAndBrandInputs from './product-category-and-brand-inputs';
import ProductNameAndPriceInputs from './product-name-and-price-inputs';
import ProductQuantityAndImageAdding from './product-quantity-and-image-inputs';
import ProductSpecificationInputs from './product-specification-inputs';
import SaveButton from '../save-button';
import CancelButton from '../cancel-button';
import useUpdateProduct from '../../../../hooks/products/useUpdateProduct';
import DIalogCancelButton from './dialog-cancel-button';

const fetchImages = async (slug?: string): Promise<FileList> => {
  if (!slug) return new FileList();
  const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products/images/${slug}`);
  const data = await res.json();
  return data.images;
}

const ProductUpdateForm = ({ dialogRef, toOpen, name, defaultProduct }: {
  dialogRef: React.RefObject<HTMLDialogElement>,
  toOpen: boolean,
  name: string,
  defaultProduct?: product
}) => {
  const mutation = useUpdateProduct();
  const { data } = useQuery([defaultProduct?.name, defaultProduct?.slug], () => fetchImages(defaultProduct?.slug))

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    control,
    formState: { errors },
  } = useForm<ProductFormInputs>({
    defaultValues: {
      categorySlug: defaultProduct?.categorySlug ?? '',
      brandSlug: defaultProduct?.brandSlug ?? '',
      name: defaultProduct?.name ?? '',
      price: defaultProduct?.price ?? 0,
      images: data,
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
      data.specs.forEach(spec => formData.append('productInfo[]', JSON.stringify({ name: spec.name, description: spec.description })))
    }

    mutation.mutate(formData)
  }

  return (
    <dialog open={toOpen} ref={dialogRef} id='product-creation-dialog' className='fixed top-20 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg  w-1/2 h-[80vh] overflow-y-scroll' >
      {mutation.isSuccess ? <h1 className='absolute top-16 text-2xl text-lime-500 text-center'>Успех!</h1> : null}
      <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-5 flex-col items-start justify-start p-5 `} encType="multipart/form-data">
        <h1 className='font-bold text-3xl text-center text-gray-600'>
          Изменить товар
        </h1>
        <input type="hidden" value={defaultProduct?.id} {...register('id')} />
        <ProductCategoryAndBrandInputs
          register={register}
          errors={errors}
        />
        <ProductNameAndPriceInputs
          register={register}
          errors={errors}
          defaultProduct={defaultProduct}
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