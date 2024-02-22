import Catalog from '@/components/products/catalog';
import useProducts from '@/hooks/products/useProducts';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const query = params.get('query')?.toString()
  const page = params.get('page')
  const categories = params.get('category')?.split(';')
  const brands = params.get('brand')?.split(';')
  const specifications = params.get('specifications')?.split(';')
  const { data, isLoading } = useProducts({ page: Number(page), query, categories, brands, specifications });

  console.log('data', data)

  return (
    <Catalog products={data?.products!}
      totalPages={data?.totalPages!}
    />
  )
}

export default Page