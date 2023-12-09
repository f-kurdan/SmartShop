import React from 'react'
import CancelButton from './cancel-button'
import useCategories from '@/hooks/useCategories';
import { useBrands } from '@/hooks/useBrands';

const ProductCreatingDialog = ({ state, title }: { state: boolean, title: string }) => {
    const { data: categories } = useCategories();
    const { data: brands } = useBrands();


    return (
        <dialog open={state} className='fixed top-1/4 transition-all duration-100 z-10 bg-white rounded-lg shadow-lg  w-1/2' >
            <div className={`flex gap-7 flex-col items-center justify-start p-5`}>
                <div className='font-bold text-3xl text-center text-gray-600'>
                    {title}
                </div>
                <select defaultValue={"1"} className='bg-gray-100 rounded-lg h-14 w-[45%] p-3'>
                    <option value='1' disabled hidden>Выберите категорию</option>
                    {categories?.map(category =>
                        <option key={category.id} value={category.id} className='my-5' >{category.name}</option>)}
                </select>
                <select defaultValue={"1"} className='bg-gray-100 rounded-lg h-14 w-[45%] p-3'>
                    <option value='1' disabled hidden>Выберите бренд</option>
                    {brands?.map(brand =>
                        <option key={brand.id} value={brand.id} >{brand.name}</option>)}
                </select>
                <input type="text" placeholder='Введите название' className='bg-gray-100 rounded-lg h-14 w-11/12 p-4' />
                <input type="number" placeholder='Введите стоимость' className='bg-gray-100 rounded-lg h-14 w-11/12 p-4' />
                <CancelButton />
            </div>
        </dialog>
    )
}

export default ProductCreatingDialog