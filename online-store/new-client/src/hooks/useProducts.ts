import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = (page?: number, query?:string, categoriesId?: number[]) => {
  return useQuery(["products", page, query, categoriesId], () => getProducts(page, query, categoriesId))
}

export default useProducts