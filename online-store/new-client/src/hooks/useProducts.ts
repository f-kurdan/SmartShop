import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = (query?:string) => {
  return useQuery(["products", query], () => getProducts(query))
}

export default useProducts