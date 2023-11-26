import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = (page?: number, query?:string, categoriesId?: number[], brands?: number[], characteristics?:string[]) => {
  return useQuery(["products", page, query, categoriesId, brands, characteristics], () => getProducts(page, query, categoriesId, brands, characteristics))
}

export default useProducts