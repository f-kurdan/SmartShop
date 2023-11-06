import useProductById from '@/hooks/useProductById';
import { getProductById, getProducts } from '@/services/product.service';
import React from 'react'
import { dehydrate, QueryClient } from 'react-query';

export async function getStaticPaths() {
    const products = await getProducts();

  const paths = [...products?.map(product => ({
    params: { productId: product.id.toString() },
  }))]

  return { paths, fallback: false }
}

export async function  getStaticProps({ params }: { params: { productId: string } }) {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(['products', params.productId], () => getProductById(params.productId))

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        productId: params.productId,
      },
  
      revalidate: 60 * 60
    }
    
}

const Product = ({productId}:{productId:string}) => {
    const {isLoading, data} = useProductById(productId);

  return data && ( 
    <div>
        {data.name}
        {data.price}
    </div>
    
  )
}

export default Product