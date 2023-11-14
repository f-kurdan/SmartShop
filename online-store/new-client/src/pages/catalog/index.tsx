import NoItems from '@/components/products/no-items';
import ProductsList from '@/components/products/products-list';
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

const Component = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const query = params.get('query')?.toString() ?? ''

  const { isLoading, data } = useProducts(query);
  
  return isLoading ? (<span>Идет загрузка...</span>) : (
    <ProductsList products={data!} 
    />
  )
}

export default Component