import GoBackButton from '@/components/go-back-button';
import Carousel from '@/components/products/carousel';
import ProductInfo from '@/components/products/product-info/product-info';
import useProduct from '@/hooks/products/useProduct';
import { montserrat } from '@/styles/fonts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import productService from '../../services/product.service';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products", slug], () => productService.getProduct(slug));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    },
    revalidate: 600
  };
};

const Product = () => {
  const router = useRouter();
  //надо вместо slug сделать id
  const { isLoading, data } = useProduct(router.query.slug as string);

  return (
    <div className={`${montserrat.className} flex flex-col w-4/5 justify-around items-stretch m-5 gap-5 text-gray-700`}>
      <GoBackButton />
      <div className='flex flex-row  bg-white max-h-[70vh] gap-5 p-10 w-full justify-center items-start'>
        {isLoading ? (<div>Идет загрузка</div>) : (
          (
            <>
              <Carousel images={data?.images ?? []} />
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

