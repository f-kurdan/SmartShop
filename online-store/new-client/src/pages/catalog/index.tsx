import Catalog from '@/components/products/catalog';
import useProducts from '@/hooks/useProducts';
import { getProducts } from '@/services/product.service';
import { useSearchParams } from 'next/navigation';
import React from 'react'
// import { QueryClient, dehydrate } from 'react-query'

// export const getStaticProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["products"], () => getProducts());

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 60,
//   }
// }

const Page = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const query = params.get('query')?.toString()  
  const page = params.get('page') 
  const categories = params.get('category')?.split(';')
  const brands = params.get('brand')?.split(';')
  const specifications = params.get('specifications')?.split(';')
  const { isLoading, data, isFetched } = useProducts(Number(page), query, categories, brands, specifications);  

  return (
    <Catalog products={data?.products!} 
    totalPages={data?.totalPages!} 
    />
  )
}

export default Page