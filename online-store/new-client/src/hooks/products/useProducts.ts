import productService from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = ({ page, limit, query, categories, brands, specifications }: {
  page?: number,
  limit?: number,
  query?: string,
  categories?: string[],
  brands?: string[],
  specifications?: string[]
}) => {
  return useQuery(["products", page, limit, query, categories, brands, specifications], () => productService.getProducts(page, limit, query, categories, brands, specifications))
}

export default useProducts