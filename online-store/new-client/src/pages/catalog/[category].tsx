import NoItems from '@/components/item-lists/no-items'
import ProductsList from '@/components/item-lists/products-list'
import { products } from '@/data'
import React from 'react'
import { QueryClient, dehydrate, useQuery } from 'react-query'

const getProducts = () => {
  return Promise.resolve(products);
}

const getProductByCategory = async (categoryId: string) => {
  if (categoryId) {
    return Promise.resolve(products.filter(product => product.category_id.toString() === categoryId));
  }
  return Promise.resolve(products);
}

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
      dehydratedSState: dehydrate(queryClient),
      categoryId: params.category,
    },

    revalidate: 60 * 60
  }
}

const Category = ({ categoryId }: { categoryId: string }) => {
  const { isLoading, data } = useQuery(["products", categoryId], () => getProductByCategory(categoryId))

  if (!data) return <span>Нет товаров!</span>
  return isLoading ? (<span>Идет загрузка...</span>) : (
    <ProductsList products={data} />
  )
    
}

export default Category