import { getProduct } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProductById = (sku:string) => {
  return useQuery(['products', sku], () => getProduct(sku))
}

export default useProductById