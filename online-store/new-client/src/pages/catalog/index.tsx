import ProductsList from '@/components/products/products-list';
import useProducts from '@/hooks/useProducts';
import { getProducts } from '@/services/product.service';
import React from 'react'
import { QueryClient, dehydrate } from 'react-query'

export async function getStatincProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products"], getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  }
}

const Component = () => {
  const { isLoading, data } = useProducts();
  
  if (!data) return <span>Нет товаров!</span>
  return isLoading ? (<span>Идет загрузка...</span>) : (
    <ProductsList products={data} 
    />
  )
}

export default Component