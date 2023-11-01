import { getProducts } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProducts = () => {
  return useQuery(["products"], getProducts)
}

export default useProducts