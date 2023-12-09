import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = (page?: number, query?:string, categoriesId?: number[], brands?: number[], color?: string[], specifications?:string[]) => {
  return useQuery(["products", page, query, categoriesId, brands, color, specifications], () => getProducts(page, query, categoriesId, brands, color, specifications))
}

export default useProducts