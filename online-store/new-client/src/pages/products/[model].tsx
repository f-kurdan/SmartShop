import GoBackButton from '@/components/go-back-button';
import Carousel from '@/components/products/carousel';
import ProductInfo from '@/components/products/product-info';
import useProduct from '@/hooks/useProductById';
import { getAllProducts, getProduct } from '@/services/product.service';
import { montserrat } from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'
import { dehydrate, QueryClient } from 'react-query';

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products?.map(product => ({
    params: { model: product.model },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { model: string } }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['products', params.model], () => getProduct(params.model))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      model: params.model,
    },

    revalidate: 60 * 60
  }
}

const Product = ({ model }: { model: string }) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const router = useRouter()
  const selectedColor = params?.get('color')?? "white";
  const selectedStorageSize = params?.get('storage')?.toString();
  const { isLoading, data } = useProduct(model, selectedColor, selectedStorageSize);

  console.log(data)

  return (
    <div className={`${montserrat.className} flex flex-col justify-around items-stretch m-5 gap-5 text-gray-700`}>
      <GoBackButton router={router} />
      <div className='flex flex-row  bg-white  gap-10 p-10  justify-center items-center'>
        {isLoading ? (<div>Идет загрузка</div>) : (
          (
            <>
              <Carousel />
              <ProductInfo price={data?.price}
                name={data?.name}
                characteristics={data?.characteristics} />
            </>
          )
        )}
      </div>
    </div>
  )
}

export default Product