import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = ({page, query, categories, brands, specifications}:{page?: number, query?:string, categories?: string[], brands?: string[], specifications?:string[]}) => {
  return useQuery(["products", page, query, categories, brands, specifications], () => getProducts(page, query, categories, brands, specifications))
}

export default useProducts