import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = (page?: number, query?:string, categoryId?: number) => {
  return useQuery(["products", page, query, categoryId], () => getProducts(page, query, categoryId))
}

export default useProducts