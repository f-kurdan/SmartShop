import React, { useState } from 'react';
import CategoriesAdminList from '../../components/admin/lists/categories/categories-list';
import BrandsAdminList from '../../components/admin/lists/brands/brands-list';
import ProductsAdminList from '../../components/admin/lists/products/products-list';

const index = () => {
  const [selectedList, setSelectedList] = useState('categories');
  const [toBlurList, setToBlurList] = useState(false);

  const getSelectedStyle = (name: string) => (selectedList === name? 'outline outline-2 outline-blue-500 shadow-md ' : '') + `rounded-lg bg-white p-3 cursor-pointer`
  
  return (
    <div className={`$ flex flex-row gap-2 p-2 w-[80%] `}>
      <div id='buttons-list' className={`${toBlurList ? 'blur-md' : ''} sticky flex flex-col justify-center gap-2 p-3 w-[35%] h-56 bg-gray-50 text-center`}>
        <h1 onClick={() => setSelectedList('categories')} className={getSelectedStyle('categories')}>Список категорий</h1>
        <h1 onClick={() => setSelectedList('brands')} className={getSelectedStyle('brands')}>Список брендов</h1>
        <h1 onClick={() => setSelectedList('products')} className={getSelectedStyle('products')}>Список товаров</h1>
      </div>
      {selectedList === 'categories' ?
        (<CategoriesAdminList setToBlurList={setToBlurList}/>) :
        selectedList === 'brands' ?
          (<BrandsAdminList setToBlurList={setToBlurList}/>) :
          selectedList === 'products' ?
            (<ProductsAdminList setToBlurList={setToBlurList}/>) : null
      }
    </div>
  )
}

export default index