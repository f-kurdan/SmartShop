import React, { useState } from 'react';
import CategoriesAdminList from '../../components/admin/lists/categories-list';
import BrandsAdminList from '../../components/admin/lists/brands-list';
import ProductsAdminList from '../../components/admin/lists/products-list';

const index = () => {
  const [selectedList, setSelectedList] = useState('categories');

  return (
    <div className={`flex flex-row gap-2 p-2 w-[80%] `}>
      <div id='buttons-list' className={`flex flex-col justify-center gap-2 p-3 w-[35%] bg-gray-50 text-center`}>
        <h1 onClick={() => setSelectedList('categories')} className='rounded-lg bg-white p-3 cursor-pointer'>Список категорий</h1>
        <h1 onClick={() => setSelectedList('brands')} className='rounded-lg bg-white p-3 cursor-pointer'>Список брендов</h1>
        <h1 onClick={() => setSelectedList('products')} className='rounded-lg bg-white p-3 cursor-pointer'>Список товаров</h1>
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