import React, { useState } from 'react';
import CategoriesAdminList from '../../components/admin/lists/categories/categories-list';
import BrandsAdminList from '../../components/admin/lists/brands-list';
import ProductsAdminList from '../../components/admin/lists/products-list';

const index = () => {
  const [selectedList, setSelectedList] = useState('categories');

  const getSelectedStyle = (name: string) => (selectedList === name? 'outline outline-2 outline-blue-500 shadow-md ' : '') + `rounded-lg bg-white p-3 cursor-pointer`
  console.log(getSelectedStyle('categories'))
  return (
    <div className={`flex flex-row gap-2 p-2 w-[80%] `}>
      <div id='buttons-list' className={`sticky flex flex-col justify-center gap-2 p-3 w-[35%] bg-gray-50 text-center`}>
        <h1 onClick={() => setSelectedList('categories')} className={getSelectedStyle('categories')}>Список категорий</h1>
        <h1 onClick={() => setSelectedList('brands')} className={getSelectedStyle('brands')}>Список брендов</h1>
        <h1 onClick={() => setSelectedList('products')} className={getSelectedStyle('products')}>Список товаров</h1>
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