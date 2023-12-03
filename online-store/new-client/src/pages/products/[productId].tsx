import GoBackButton from '@/components/go-back-button';
import ProductImageFiller from '@/components/products/fillers/product-image-filler';
import useProductById from '@/hooks/useProductById';
import { getAllProducts, getProductById } from '@/services/product.service';
import { montserrat } from '@/styles/fonts';
import Image from 'next/image';
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
              <Image className='max-h-96 max-w-min' src={data!.photo} alt={data!.name} width={400} height={400} />
              <div className='flex flex-col justify-start items-start text-base px-3'>
                <p className='font-black text-lg'>{data!.name}</p>
                <div className='my-5 min-w-fit text-center'>
                  <p className='border-2 border-black border-solid  p-1 '>
                    {data!.price}
                  </p>
                  <p className='bg-lime-400 hover:invert p-1 transition duration-400 hover:cursor-pointer'>Купить</p>
                </div>
                {!!data!.characteristics.length && data!.characteristics.map(char => (
                  <p className='mb-3'><span className='font-black'>{char.name}: </span>{char.value}</p>
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