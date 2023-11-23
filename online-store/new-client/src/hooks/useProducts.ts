import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = (page?: number, query?:string) => {
  return useQuery(["products", page, query], () => getProducts(page, query))
}

export default useProducts