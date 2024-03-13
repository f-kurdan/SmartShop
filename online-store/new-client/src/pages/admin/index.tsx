import React, { useState } from 'react';
import CategoriesAdminList from '../../components/admin/lists/categories/categories-list';
import BrandsAdminList from '../../components/admin/lists/brands/brands-list';
import ProductsAdminList from '../../components/admin/lists/products/products-list';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import cookie from 'js-cookie';

const index = () => {
  const searchParam = useSearchParams();
  const params = new URLSearchParams(searchParam);
  const pathName = usePathname()
  const selectedList = params.get('list') ?? 'categories';
  const router = useRouter();
  const token = cookie.get('jwt');

  if (!token) {
    router.replace('/auth');
  }

  const getSelectedStyle = (name: string) => (selectedList === name ? 'outline outline-2 outline-blue-500 shadow-md ' : '') + `rounded-lg bg-white p-3 cursor-pointer`

  const onSelect = (name: string) => {
    params.set('list', name);
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className={`$ flex flex-row gap-2 p-2 w-[80%] `}>
      <div className={` sticky flex flex-col justify-center gap-2 p-3 w-[35%] h-56 text-center`}>
        <h1 onClick={() => onSelect('categories')} className={getSelectedStyle('categories')}>Список категорий</h1>
        <h1 onClick={() => onSelect('brands')} className={getSelectedStyle('brands')}>Список брендов</h1>
        <h1 onClick={() => onSelect('products')} className={getSelectedStyle('products')}>Список товаров</h1>
      </div>
      {selectedList === 'categories' ?
        (<CategoriesAdminList />) :
        selectedList === 'brands' ?
          (<BrandsAdminList />) :
          selectedList === 'products' ?
            (<ProductsAdminList />) : null
      }
    </div>
  )
}

export default index