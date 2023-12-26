import Catalog from '@/components/products/catalog';
import useProducts from '@/hooks/useProducts';
import { getProducts } from '@/services/product.service';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Page = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const query = params.get('query')?.toString() ?? ''  
  const page = params.get('page') ?? 1  
  const categoriesId = params.get('category')?.split(';').map(id => +id)
  const brands = params.get('brand')?.split(';').map(id => +id)
  const colors = params.get('color')?.split(';');
  const specifications = params.get('specifications')?.split(';').map(name => name)
  const { data, isFetched } = useProducts(+page, query, categoriesId, brands, colors, specifications);  

  console.log("products zdes: " + data?.products)
  console.log("error: " + isFetched)

  return (
    <Catalog products={data?.products!} 
    totalProducts={data?.totalProducts} 
    />
  )
}

export default Page