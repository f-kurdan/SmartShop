import ProductsList from '@/components/products/products-list';
import useProductByCategory from '@/hooks/useProductByCategory';
import { getProductByCategory, getProducts } from '@/services/product.service';
import React from 'react'
import { QueryClient, dehydrate } from 'react-query'

export async function getStaticPaths() {
  //   const res = await fetch('http://example.com/categories')
  //   const categories = await res.json()
  const products = await getProducts();

  const paths = [...products?.map(product => ({
    params: { category: product.category_id.toString() },
  }))]

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: { params: { category: number } }) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["products", params.category], () => getProductByCategory(params.category.toString()))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      categoryId: params.category,
    },

    revalidate: 60 * 60
  }
}

const Category = ({ categoryId }: { categoryId: string }) => {
  let { isLoading, data } = useProductByCategory(categoryId)

  if (!data) return <span>Нет товаров!</span>
  return isLoading ? (<span>Идет загрузка...</span>) : (
    <ProductsList products={data}
      categoryId={categoryId} />
  )

}

export default Category