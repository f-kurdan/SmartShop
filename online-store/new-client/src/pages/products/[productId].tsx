import GoBackButton from '@/components/go-back-button';
import Carousel from '@/components/products/carousel';
import ProductInfo from '@/components/products/product-info';
import useProductById from '@/hooks/useProductById';
import { getAllProducts, getProductById } from '@/services/product.service';
import { montserrat } from '@/styles/fonts';
import { useRouter } from 'next/router';
import React from 'react'
import { dehydrate, QueryClient } from 'react-query';

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products?.map(product => ({
    params: { productId: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { productId: string } }) {
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

const Product = ({ productId }: { productId: string }) => {
  const router = useRouter()
  const { isLoading, data } = useProductById(productId);

  return (
    <div className={`${montserrat.className} flex flex-col justify-around items-stretch m-5 gap-5 text-gray-700`}>
      <GoBackButton router={router} />
      <div className='flex flex-row  bg-white  gap-10 p-10  justify-center items-stretch'>
        {isLoading ? (<div>Идет загрузка</div>) : (
          (
            <>
              <Carousel />
              <ProductInfo price={data!.price}
                name={data!.name}
                characteristics={data!.characteristics} />
            </>
          )
        )}
      </div>
    </div>
  )
}

export default Product