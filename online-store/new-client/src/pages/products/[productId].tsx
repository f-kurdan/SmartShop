import GoBackButton from '@/components/go-back-button';
import ProductImageFiller from '@/components/products/fillers/product-image-filler';
import useProductById from '@/hooks/useProductById';
import { getProductById, getProducts } from '@/services/product.service';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react'
import { dehydrate, QueryClient } from 'react-query';

export async function getStaticPaths() {
  const products = await getProducts();

  const paths = [...products?.map(product => ({
    params: { productId: product.id.toString() },
  }))]

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
    <div className='flex flex-col justify-around items-stretch m-5 gap-5'>
      <GoBackButton router={router} />
      <div className='flex flex-row  bg-white rounded-xl gap-10 py-10  justify-center items-stretch'>
        {isLoading ? (<div>Идет загрузка</div>) : (
          (
            <>
              <Suspense fallback={<ProductImageFiller />}>
                <Image src={data!.photo} alt={data!.name} width={350} height={350} />
              </Suspense>
              <div className='flex flex-col justify-start items-start text-base px-3'>
                <p className='font-semibold text-lg'>{data!.name}</p>
                <div className='my-5 min-w-fit text-center'>
                  <p className='border-2 border-black border-solid  p-1 '>
                    {data!.price}
                  </p>
                  <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>Купить</p>
                </div>
                {!!data!.characteristics.length && data!.characteristics.slice(0, 5).map(char => (
                  <p className='mb-3'><span className='font-semibold'>{char.name}: </span>{char.value}</p>
                ))}
              </div>

            </>
          )
        )}
      </div>
    </div>
  )
}

export default Product