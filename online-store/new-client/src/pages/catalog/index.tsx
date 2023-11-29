import Catalog from '@/components/products/catalog';
import useProducts from '@/hooks/useProducts';
import { getProducts } from '@/services/product.service';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import { QueryClient, dehydrate } from 'react-query'

export async function getStatincProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], () => getProducts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  }
}

const Page = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const query = params.get('query')?.toString() ?? ''  
  const page = params.get('page') ?? 1  
  const categoriesId = params.get('category')?.split(';').map(id => +id)
  const brands = params.get('brand')?.split(';').map(id => +id)
  const characteristics = params.get('characteristics')?.split(';').map(name => name)
  const { isLoading, data } = useProducts(+page, query, categoriesId, brands, characteristics);  

  return isLoading ? (<span>Идет загрузка...</span>) : (
    <Catalog products={data?.products!} 
    totalProducts={data?.totalProducts} 
    />
  )
}

export default Page