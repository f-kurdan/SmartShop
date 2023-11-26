import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = (page?: number, query?:string, categoriesId?: number[], brands?: number[]) => {
  return useQuery(["products", page, query, categoriesId, brands], () => getProducts(page, query, categoriesId, brands))
}

export default useProducts