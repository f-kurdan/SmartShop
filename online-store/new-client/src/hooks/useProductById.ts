import { getProductById } from '@/services/product.service'
import { useQuery } from 'react-query'

const useProductById = (productId:string) => {
  return useQuery(['products', productId], () => getProductById(productId))
}

export default useProductById