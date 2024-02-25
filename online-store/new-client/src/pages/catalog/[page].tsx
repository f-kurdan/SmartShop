import Catalog from '@/components/products/catalog';
import useProducts from '@/hooks/products/useProducts';
import { useSearchParams } from 'next/navigation';
import { dehydrate, QueryClient } from 'react-query';
import productService from '../../services/product.service';

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STOREAPI_URL}/products/pages`);
  const totalPages: number = await res.json();
  const paths = Array.from({ length: totalPages }).map((page, index) => ({ params: { page: (index + 1).toString() } }))

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { page: string } }) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery( ['products'], () => productService.getProducts(parseInt(params.page)))

  return {
    props: {
      page: params.page,
      dehydratedState: dehydrate(queryClient),
      revalidate: 600
    },
  }
}

const Page = ({page} : { page: number}) => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const query = params.get('query')?.toString()
  const categories = params.get('category')?.split(';')
  const brands = params.get('brand')?.split(';')
  const specifications = params.get('specifications')?.split(';')
  const { data } = useProducts({ page, query, categories, brands, specifications });

  return (
    <Catalog products={data?.products!}
      totalPages={data?.totalPages!}
      currentPage={page}
    />
  )
}

export default Page