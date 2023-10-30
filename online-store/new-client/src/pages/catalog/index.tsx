import ProductsList from '@/components/item-lists/products-list';
import { products } from '@/data'
import React from 'react'
import { QueryClient, dehydrate, useQuery } from 'react-query'

const getProducts = () => {
  return Promise.resolve(products);
}

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
  const { isLoading, data } = useQuery(["products"], getProducts)
  if (!data) return <span>Нет товаров!</span>
  return isLoading ? (<span>Идет загрузка...</span>) : (
    <ProductsList products={data} />
  )
}

export default Component