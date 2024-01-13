import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import useBrands from '../../../hooks/brands/useBrands';
import useCategories from '../../../hooks/categories/useCategories';
import { ProductFormInputs } from '../../../types';

const ProductCategoryAndBrandInputs = ({errors, register}:{
    register: UseFormRegister<ProductFormInputs>,
    errors: FieldErrors<ProductFormInputs>}) => {
    const { data: categories } = useCategories();
    const { data: brands } = useBrands();
    
    return (
        <div className='grid grid-cols-2 gap-2 w-11/12 '>
                    <select defaultValue={"1"} className={`${errors.category ? 'outline outline-red-500' : ''} bg-gray-100 rounded-lg h-14 p-3`}
                    {...register("category", {
                        required: true,
                    })}>
                        <option value='1' disabled hidden>Выберите категорию</option>
                        {categories?.map(category =>
                            <option key={category.id} value={category.slug} className='my-5'>{category.name}</option>)}
                    </select>
                    <select defaultValue={"1"} className={`${errors.brand ? 'outline outline-red-500' : ''} bg-gray-100 rounded-lg h-14 p-3`} 
                    {...register("brand", {
                        required: true,
                    })}>
                        <option value='1' disabled hidden>Выберите бренд</option>
                        {brands?.map(brand =>
                            <option key={brand.id} value={brand.slug} >{brand.name}</option>)}
                    </select>
                </div>
    )
}

export default ProductCategoryAndBrandInputs