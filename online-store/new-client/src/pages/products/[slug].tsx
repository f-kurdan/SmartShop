import GoBackButton from '@/components/go-back-button';
import Carousel from '@/components/products/carousel';
import ProductInfo from '@/components/products/product-info/product-info';
import { ProductContext } from '@/contexts/Contexts';
import useProduct from '@/hooks/useProductById';
// import { getAllProducts, getProduct } from '@/services/product.service';
import { montserrat } from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'
import { dehydrate, QueryClient } from 'react-query';
import { getProduct, getProducts } from '../../services/product.service';

// export async function getStaticPaths() {
//   const products = await getProducts();

//   const paths = products?.products.map(product => ({
//     params: { slug: product.slug },
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['products', params.id, () => getProduct(params.id))

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       id: params.id,
//     },

//     revalidate: 60 * 60
//   }
// }

const Product = ({ slug }: { slug: string }) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const router = useRouter()
  const selectedColor = params?.get('color')?? "white";
  const selectedStorageSize = params?.get('storage')?.toString();
  const { isLoading, data } = useProduct(router.query.slug as string);

  console.log("data:--------" + JSON.stringify(data))
  return (
    <div className={`${montserrat.className} flex flex-col w-4/5 justify-around items-stretch m-5 gap-5 text-gray-700`}>
      <GoBackButton router={router} />
      <div className='flex flex-row  bg-white  gap-5 p-10 w-full justify-center items-start'>
        {isLoading ? (<div>Идет загрузка</div>) : (
          (
            <>
              <Carousel />
              <ProductInfo 
              data={data} />
            </>
          )
        )}
      </div>
    </div>
  )
}

export default Product